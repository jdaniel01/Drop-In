import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './About.css';

const About = (params) => {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='about-wrapper'>
            <div className="about">
                <h1 className="h2">Welcom to "Drop In"</h1>
                <p>('Meet Up' clone...)</p>
                <p></p>
                <div>Extreme sports has a bad wrap for being kinda dangerous and leaves shredders prone to injury. Drop in gives you the opportunity to find a 'battle-buddy' to help you back up when the streets knock you down. Let's face it, there's nothing worse than hobbling About broken, bruised and in agony. But maybe I got you pegged wrong and you don't fall anymore (yea right), there's still an opportunity for you to help others progress while promoting the sport. If you fall too much, maybe there's someone out there hosting a shred session nearby where you can 'drop-in'. Whatever the cause, we'll help you unlock the possibilities so you can focus on the next drop in.</div>
                <p></p>
                <div className="nav-link button" onClick={() => {
                    if (sessionUser) {
                        history.push('/events/new')
                    } else {
                        window.alert("You must be logged in to create an Event");
                    }
                }
                }>
                    Host A Session Today!
                </div>
            </div>
        </div>
    )
}


export default About;
