import {csrfFetch} from './csrf';

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
            const newLocations = {};
            action.locations.forEach(location => {
                newLocations[location.id] = location;
            });
            return {...state, ...newLocations}
        }
        default:
            return state;
    }
}

export default locationsReducer;
