import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import countriesReducer from './countrys';
import statesReducer from './states';
import citiesReducer from './citys';
import locationsReducer from './locations';
import sportsReducer from './sports';

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  countries: countriesReducer,
  states: statesReducer,
  cities: citiesReducer,
  locations: locationsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
