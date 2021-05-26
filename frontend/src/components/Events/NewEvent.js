import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCountries } from '../../store/countries';
import { getStates } from '../../store/states';
import { getCities } from '../../store/cities';
import { getLocations } from '../../store/locations';
import { getSports } from '../../store/sports';
import {addOneEvent} from '../../store/events';
import './Events.css';
import { v4 as uuidv4 } from 'uuid';

const NewEvent = () => {

    const sessionUser = useSelector(state => state.session.user);
    const sports = useSelector(state => Object.values(state.sports));
    const countries = useSelector(state => Object.values(state.countries));
    const states = useSelector(state => Object.values(state.states));
    const cities = useSelector(state => Object.values(state.cities));
    const locations = useSelector(state => Object.values(state.locations));

    const dispatch = useDispatch();
    const history = useHistory();

    const [location, setLocation] = useState(false);
    const [country, setCountry] = useState(false);
    const [state1, setState] = useState(false);
    const [city, setCity] = useState(false);
    const [sport, setSport] = useState(sports[0]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);
    const [date, setDate] = useState(false);

    const updateName = (e) => setName(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateSport = (e) => setSport(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateDate = (e) => setDate(e.target.value);

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getSports());
    }, [dispatch])

    useEffect(() => {
        if (country) {
            dispatch(getStates(country));
        }
    }, [country, dispatch])

    useEffect(() => {
        if (state1) {
            dispatch(getCities(state1))
        }
    }, [state1, dispatch])

    useEffect(() => {
        if (city) {
            dispatch(getLocations(city))
        }
    }, [city, dispatch])


    useEffect(() => {
        if (name && date && location && sport && description) {
            setIsDisabled(false);
        } else { setIsDisabled(true); }
    }, [name, date, description, location, sport])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const event = {
            host: sessionUser.id,
            name,
            sport_id: sport,
            description,
            location_id: location,
            when: date
        }

        let newEvent = await dispatch(addOneEvent(event));

        if (newEvent) {
            history.push(`/events/${newEvent.id}`)
        }
    }

    return (
        <div className="form-wrapper">
            <form className="event-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Session Name</label>
                <input id="name" name="name" type="text" value={name} onChange={updateName} />

                <label htmlFor="sport_id">Choose A Sport</label>
                <select id="sport_id" name="sport_id" value={sport} onChange={updateSport}>
                    <option value={false}>Choose a sport</option>
                    {sports.map(sport => <option key={uuidv4()} value={sport.id}>{sport.name}</option>)}
                </select>

                <label htmlFor="when">Session Date</label>
                <input type="date" id="when" name="when" value={date} onChange={updateDate} />

                <label htmlFor="description">Describe Session:</label>
                <div>Here's you'll enter a description of why you're hosting a session. Looking for buds, want to show some noobs how to shred, or are you looking for a champ to show you how to send it? Tell it here.</div>
                <textarea id="description" name="description" value={description} onChange={updateDescription} />

                <label htmlFor="country_id">Session Country</label>
                <select id="country_id" name="country_id" value={country} onChange={updateCountry}>
                    <option value={false}>Choose a country for your session</option>
                    {countries.map(country => <option key={uuidv4()} value={Number(country.id)}>{country.name}</option>)}
                </select>
                {country &&
                    <>
                        <label htmlFor="state_id">Session State</label>
                        <select id="state_id" name="state_id" value={state1} onChange={updateState}>
                            <option value={false}>Choose a state for your session</option>
                            {states.map(state2 => <option key={uuidv4()} value={Number(state2.id)}>{state2.name}</option>)}
                        </select>
                    </>
                }
                {state1 &&
                    <>
                        <label htmlFor="city_id">Session City</label>
                        <select id="city_id" name="city_id" value={city} onChange={updateCity}>
                            <option value={false}>Choose a city for your session</option>
                            {cities.map(city1 => <option key={uuidv4()} value={Number(city1.id)}>{city1.name}</option>)}
                        </select>
                    </>
                }
                {city &&
                    <>
                        <label htmlFor="location_id">Session Location</label>
                        <select id="location_id" name="location_id" value={location} onChange={updateLocation}>
                            <option value={false}>Please chooose a location</option>
                            {locations.map(location1 => <option key={uuidv4()} value={location1.id}>{location1.name}</option>)}
                        </select>
                        <p>Don't see the location you're looking for? Click <span onClick={() => history.push('/locations/new')}>here</span> to add a new location.</p>

                    </>
                }

                <button className="nav-link" type="submit" disabled={isDisabled}>Post Session</button>
            </form>
        </div>
    )
}


export default NewEvent;
