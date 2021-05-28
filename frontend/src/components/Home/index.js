import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { loadEventsByDate } from '../../store/events';
import { useEffect, useState } from 'react';


import './Home.css';

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const eventsByDate = useSelector(state => Object.values(state.events));

    const [allEvents, setAllEvents] = useState(eventsByDate);


    useEffect(() => {
        
        dispatch(loadEventsByDate())

        setAllEvents(eventsByDate)
    }, [dispatch])

    useEffect(() => {
        setAllEvents(eventsByDate)
    }, [allEvents])

    return (
        <div className="home-wrapper">

            <div className="link-component">
                <h2 className="h2">Don't Shred Alone!</h2>
                <div className="nav-link button" onClick={() => {
                    if (sessionUser) {
                        history.push('/events/new')
                    } else {
                        window.alert("You must be logged in to create an Event");
                    }
                }}>
                    Host A Session
                    </div>
            </div>
            <p />
            <div className="all-events-wrapper">
                {eventsByDate.map(event => (
                    <div key={event.id} className="event-wrapper" onClick={() =>
                        history.push(`/events/${event.id}`)
                    }>
                        <h3 className="session-title">{event.name}</h3>
                        <div className="session-detail">
                            <h4>Host: {event.User?.username}</h4>
                            <h4>Where: {event.Location?.name}</h4>
                            <h4>When: {event.when?.split('T')[0]}</h4>
                            <h4> Details: {event.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}


export default Home;
