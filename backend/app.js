const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const csrf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const {ValidationError} = require('sequelize');

const {environment} = require('./config');
const isProduction = environment === 'production';
const indexRouter = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
if (!isProduction){
    app.use(cors());
}
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(csrf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && 'Lax',
        httpOnly: true
    }
}));

app.use(indexRouter);


app.use((req, res, next) => {
    const err = new Error('Wipe out. The resource you were looking for could not be found.');
    err.title = "Resource Not Found";
    err.errors = ["Wipe out. The resource you were looking for could not be found."];
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    if(err instanceof ValidationError) {
        err.errors = err. errors.map((e) => e.message);
        err.title = 'Validation error';
    }
    next(err);
})
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack
    })
});



module.exports = app;
