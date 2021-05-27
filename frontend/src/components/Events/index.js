import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { selectOneEvent } from '../../store/events';
import { useEffect, useState } from 'react';
import './Events.css';

const Event = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const eventLocation = useSelector(state => state.events);
    const [event, setEvent] = useState(eventLocation.event);
    const [location, setLocation] = useState(eventLocation.location);

    useEffect(() => {
        dispatch(selectOneEvent(id));
    }, [dispatch]);

    useEffect(() => {
        setEvent(eventLocation.event);
        setLocation(eventLocation.location);
    }, [eventLocation])

    return (
        <div className="body-wrapper">
            <div className="event-wrapper">
                <h1>{event?.name}</h1>
                <h2 onClick={() => history.push(`/users/${event?.User.id}`)}>Host: {event?.User.username}</h2>
                <h3>Joined By: {"Add riders"}</h3>
                <h4 onClick={() => history.push(`/locations/${location?.id}`)}>Where: {location?.name} ({location?.City.name},{location?.State.name}, {location?.Country.abbrv})</h4>
                <h3>Session Details:</h3>
                <div>{event?.description}</div>
            </div>
            <div className="image-wrapper">
                <img src={location?.image}/>
            </div>
        </div>
    );
}



export default Event;
