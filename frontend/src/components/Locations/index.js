import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Locations.css';
import { selectLocation } from '../../store/locations';


const Location = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const here = useSelector(state => state.locations)

    const [location, setLocation] = useState();


    useEffect(() => {
        dispatch(selectLocation(id));
    }, [dispatch, id])

    useEffect(() => {
        if (!location) {
            setLocation(here);
        }
    }, [here])

    return (
        <div className="outer-wrapper">
            <div className="location-wrapper">
                <h1 className="title">{here?.name}</h1>
                <h3>Address:</h3>
                <div>{here?.address}</div>
                <div>{here?.City?.name}, {here?.State?.name}({here?.Country?.abbrv})</div>
                <h3>About {here?.name}:</h3>
                <div>{here?.description}</div>
                <p></p>
                <div className="nav-link button" onClick={() => {
                    if (sessionUser) {
                        history.push('/events/new')
                    } else {
                        window.alert("You must be logged in to create an Event");
                    }
                }
                }>
                    Skate Here!
                </div>
                <div className="image-wrapper">
                    <img src={here?.image} />
                </div>
            </div>
        </div>
    );
}


export default Location;
