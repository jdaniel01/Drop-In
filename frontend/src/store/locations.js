import {csrfFetch} from './csrf';

export const LOAD_LOCATIONS = 'locations/LOAD_LOCATIONS';

const loadLocations = (locations) => ({
    type: LOAD_LOCATIONS,
    locations
});

export const getLocations = (id) => async dispatch => {
    const response = await csrfFetch(`/api/cities/${id}/locations`);

    if(response.ok) {
        const locations = await response.json();
        console.log(locations);
        dispatch(loadLocations(locations));
    }
};

const initialState = {};

const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LOCATIONS: {
            const newLocations = {};
            action.locations.forEach(location => {
                newLocations[location.id] = location;
            });
            return newLocations;
        }
        default:
            return state;
    }
}

export default locationsReducer;
