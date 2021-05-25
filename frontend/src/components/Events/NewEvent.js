import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCountries } from '../../store/countries';
import { getStates } from '../../store/states';
import { getCities } from '../../store/cities';
import { getLocations } from '../../store/locations';
import { getSports } from '../../store/sports';
import './Events.css';


const NewEvent = () => {

    const sports = Array(useSelector(state => state.sports));
    const countries = Array(useSelector(state => state.countries));

    const dispatch = useDispatch();
    const history = useHistory();

    const [location, setLocation] = useState(null);
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [sport, setSport] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);


    const updateName = (e) => setName(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateSport = (e) => setSport(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);

    // dispatch(getStates());
    // dispatch(getCities());
    // dispatch(getLocations());

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getSports());
        
    }, [dispatch])

    useEffect(() => {
        dispatch(getStates(country));
    }, [country])

    useEffect(() => {
        dispatch(getCities(state))
    }, [state])

    useEffect(() => {
        dispatch(getLocations(city))
    }, [city])



    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="form-wrapper">
            <form className="event-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Session Name</label>
                <input id="name" name="name" type="text" value={name} onChange={updateName} />

                <label htmlFor="description">Describe Session:</label>
                <p>Here's you'll enter a description of why you're hosting a session. Looking for buds, want to show some noobs how to shred, or are you looking for a champ to show you how to send it? Tell it here.</p>
                <textarea id="description" name="description" value={description} onChange={updateDescription} />

                <label htmlFor="country_id">Session Country</label>
                <select id="country_id" name="country_id" value={country} onChange={updateCountry}>
                    <option>Choose a country for your session</option>
                    {countries.map(country => <option value={country.id}>{country.name}</option>)}
                </select>
                {country &&
                    <>
                        <label htmlFor="state_id">Session State</label>
                        <select id="state_id" name="state_id" value={state} onChange={updateState}>
                            <option>Choose a state for your session</option>
                            {states.map(state => <option value={state.id}>{state.name}</option>)}
                        </select>
                    </>
                }
                {state &&
                    <>
                        <label htmlFor="city_id">Session City</label>
                        <select id="city_id" name="city_id" value={city} onChange={updateCity}>
                            <option>Choose a city for your session</option>
                            {cities.map(city => <option value={city.id}>{city.name}</option>)}
                        </select>
                    </>
                }
                {city &&
                    <>
                        <label htmlFor="location_id">Session Location</label>
                        <select id="location_id" name="location_id" value={location} onChange={updateLocation}>
                            <option>Please chooose a location</option>
                            {locations.map(location => <option value={location.id}>{location.name}</option>)}
                        </select>
                        <p>Don't see the location you're looking for? Click <span onClick={() => history.push('/locations/new')}>here</span> to add a new location.</p>

                    </>
                }

                <label htmlFor="sport_id">Choose A Sport</label>
                <select id="sport_id" name="sport_id" value={sport} onChange={updateSport}>
                    <option>Choose a sport</option>
                    {sports.map(sport => <option value={sport.id}>{sport.name}</option>)}
                </select>

                <button type="submit" disabled={isDisabled}>Post Session</button>
            </form>
        </div>
    )
}


export default NewEvent;
