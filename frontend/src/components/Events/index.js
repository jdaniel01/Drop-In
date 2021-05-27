import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {selectOneEvent} from '../../store/events';
import {useEffect} from 'react';
import './Events.css';

const Event = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const event = useSelector(state => state.events);

    useEffect(() => {
        dispatch(selectOneEvent(id));
    }, [dispatch])

    return (
        <div> {event.name} </div>
    );
}



export default Event;
