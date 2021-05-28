import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import fullLogo from './images/dropInFull.png';
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
                <div className="nav-link" onClick={() => history.push('/signup')}>Sign Up</div>
            </>
        );
    }

    return (
        <div className="header">
            <nav className="nav-wrapper">
                <div className="search-bar">
                    <h1>Search: </h1>
                    <input type="search" placeholder="TODO: Implement Search Functionality" />
                </div>
                <div className="user-links">
                    <div className="nav-link" onClick={() => history.push('/about')}>About</div>
                    {isLoaded && sessionLinks}
                </div>
            </nav>
            <div className="logo-wrapper animate__animated animate__backInDown">
                <img className="logo" src={fullLogo} onClick={() => history.push('/')} alt="Drop-In logo with 3 silhouettes. One skateboarder, one BMX rider, one scooter rider." />
            </div>
        </div>
    );
}

export default Navigation;
