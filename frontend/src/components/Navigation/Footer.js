import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navigation.css';

function Footer () {
    const history = useHistory();

    return (
        <div className="footer">
            <h1>The Developer</h1>
            <div className="dev-container">
                <h2>James Daniel, Jr.</h2>
                <div>React, Redux, Express, JavaScript</div>
                <div className="image-container" >
                    <img src="https://avatars.githubusercontent.com/u/77118646?v=4"/>
                </div>
            </div>
        </div>
    )

}

export default Footer;
