import {csrfFetch} from './csrf';
import {useSelector} from 'react-redux';

export const LOAD_LOCATIONS = 'locations/LOAD_LOCATIONS';

const loadLocations = (locations, cityId) => ({
    type: LOAD_LOCATIONS,
    locations,
    cityId
});

export const getLocations = (id) => async dispatch => {
    const response = await csrfFetch(`/api/cities/${id}/locations`);

    if(response.ok) {
        const locations = await response.json();
        dispatch(loadLocations(locations, id));
    }
};

const initialState = {};

const locationsReducer = (state = initialState, action) => {
    switch (action.locations) {
        case LOAD_LOCATIONS: {
            const locations = {};
            action.locations.forEach(location => {
                locations[location.id] = location;
            });
            return {...state, ...locations}
        }
        default:
            return state;
    }
}

export default locationsReducer;
