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
        if (!allEvents) {
            setAllEvents(eventsByDate)
        }
    }, [eventsByDate])

    return (
        <div className="home-wrapper">

            <div className="link-component">
                <div className="nav-link button" onClick={() => {
                    if (sessionUser) {
                        history.push('/events/new')
                    } else {
                        window.alert("You must be logged in to create an Event");
                    }
                }}>
                    Host A Session
                    </div>
                <h1 className="h2">Don't Shred Alone!</h1>
            </div>
            <p />
            <div className="all-events-wrapper">
                {eventsByDate.map(event => (
                    <div key={event.id} className="event-wrapper" onClick={() =>
                        history.push(`/events/${event.id}`)
                    }>
                        <h3 className="session-title">{event.name}</h3>
                        <div className="session-detail">
                            <h3>Host: </h3>
                            <h2>{event.User?.username}</h2>
                            <h3>Where: </h3>
                            <h2>{event.Location?.name}</h2>
                            <h3>When: </h3>
                            <h4>{event.when?.split('T')[0]}</h4>
                            <h3> Details: </h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}


export default Home;
