import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { selectOneEvent } from '../../store/events';
import { useEffect, useState } from 'react';
import './Events.css';

const Event = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const eventLocation = useSelector(state => state.events);
    const [event, setEvent] = useState(eventLocation.event);
    const [location, setLocation] = useState(eventLocation.location);
    useEffect(() => {
        dispatch(selectOneEvent(id));
    }, [dispatch]);

    useEffect(()=> {
        console.log(event, location);
    }, [event, location])

    return (
        <div className="event-wrapper">
            {/* <h1>{event.name}</h1> */}
        </div>
    );
}



export default Event;
