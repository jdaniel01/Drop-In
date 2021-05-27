import { useHistory} from 'react-router-dom';
import {useSelector, useDispatch }from 'react-redux'
import {loadEventsByDate} from '../../store/events';
import { useEffect } from 'react';

import './Home.css';

const Home = (params) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const eventsByDate = useSelector(state => Object.values(state.events));

    useEffect(() => {
       dispatch(loadEventsByDate());
    }, [dispatch])

    return (
        <div className="home-wrapper">
                <div className="link-component">
                    <h2 className="h2">Don't Shred Alone!</h2>
                    <div className="nav-link button" onClick={() => {
                        if (sessionUser){
                            history.push('/events/new')
                        } else {
                            window.alert("You must be logged in to create an Event");
                        }
                    }}>
                        Host A Session
                    </div>
                </div>
                <p/>
                <div>
                    {eventsByDate.map(event => (
                        <div key={event.id} className="event-wrapper">
                            <h2>{event.name}</h2>
                            <div className="event-detail">
                                <h3>Host: {event.host}</h3>
                                <li>{event.location}</li>
                                <li>{event.description}</li>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}


export default Home;
