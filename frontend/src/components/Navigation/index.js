import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import fullLogo from './images/dropInFull.png'
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <div className="nav-link" to="/signup">Sign Up</div>
            </>
        );
    }

    return (
        <div>
            <nav className="nav-wrapper">
                {isLoaded && sessionLinks}
            </nav>
            <div className="logo-wrapper">
                <img className="logo" src={fullLogo} onClick={() => history.push('/')} alt="Drop-In logo with 3 silhouettes. One skateboarder, one BMX rider, one scooter rider."/>
            </div>
        </div>
    );
}

export default Navigation;
