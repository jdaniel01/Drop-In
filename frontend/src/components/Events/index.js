import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { selectOneEvent } from '../../store/events';
import { addOneRider, getRiders } from '../../store/riders';
import { useEffect, useState } from 'react';
import './Events.css';

const Event = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const user = useSelector(state => state.session.user)
    const eventLocation = useSelector(state => state.events);
    const riders = useSelector(state => Object.values(state.riders));

    const [allRiders, setAllRiders] = useState(riders);

    const [event, setEvent] = useState(eventLocation.event);
    const [location, setLocation] = useState(eventLocation.location);

    useEffect(() => {
        dispatch(selectOneEvent(id));
        dispatch(getRiders(id));
    }, [dispatch, id]);

    useEffect(() => {
        setEvent(eventLocation.event);
        setLocation(eventLocation.location);
        if (!allRiders) {
            setAllRiders(riders);
        }
    }, [eventLocation])

    useEffect(() => {
        
    })

    return (
        <div className="body-wrapper">
            <div className="event-wrapper_event">
                <h1>{event?.name}</h1>
                <h3>Host:</h3>
                <h2 onClick={() => history.push(`/users/${event?.User.id}`)}>{event?.User.username}</h2>
                <h3>Joined By:</h3>

                {riders.map(rider => <div className="link" key={rider?.user_id} onClick={() => history.push(`/users/${rider?.user_id}`)}>{rider?.User?.username}</div>)}

                <h3>Where:</h3>
                <h2 onClick={() => history.push(`/locations/${location?.id}`)}> {location?.name}</h2>
                <p>({location?.City.name},{location?.State.name}, {location?.Country.abbrv})</p>
                <h3>Session Details:</h3>
                <div>{event?.description}</div>
                <p></p>
                <div className="nav-link" onClick={() => {
                    if (event?.id && user) {
                        console.log(event.id, user);
                        dispatch(addOneRider(event?.id, user))
                    }
                    else {
                        window.alert("Error on the homefront");
                    }
                }}>Join Session</div>
                <div className="image-wrapper">
                    <img src={location?.image} />
                </div>
            </div>
        </div>
    );
}



export default Event;
