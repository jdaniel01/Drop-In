import { useHistory } from 'react-router-dom';
import './About.css';

const About = (params) => {
    const history = useHistory();

    return (
        <div className="about-wrapper">
            <h2 className="h2">Don't Shred Alone!</h2>
            <div>Extreme sports has a bad wrap for being kinda dangerous and leaves shredders prone to injury. Drop in gives you the opportunity to find a 'battle-buddy' to help you back up when the streets knock you down. Let's face it, there's nothing worse than hobbling About broken, bruised and in agony. But maybe I got you pegged wrong and you don't fall anymore (yea right), there's still an opportunity for you to help others progress while promoting the sport. If you fall too much, maybe there's someone out there hosting a shred session nearby where you can 'drop-in'. Whatever the cause, we'll help you unlock the possibilities so you can focus on the next drop in.</div>
            <div className="nav-link button" onClick={() => history.push('/events/new')}>
                Host A Session
            </div>
        </div>
    )
}


export default About;
