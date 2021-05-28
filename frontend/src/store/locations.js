import {csrfFetch} from './csrf';

export const LOAD_LOCATIONS = 'locations/LOAD_LOCATIONS';
export const SELECT_LOCATION = 'locations/SELECT_LOCATION';

const loadLocations = (locations) => ({
    type: LOAD_LOCATIONS,
    locations
});

const selectLocal = (location) => ({
    type: SELECT_LOCATION,
    location
});

export const getLocations = (id) => async dispatch => {
    const response = await csrfFetch(`/api/cities/${id}/locations`);

    if(response.ok) {
        const locations = await response.json();
        dispatch(loadLocations(locations));
    }
};

export const selectLocation = id => async dispatch => {
    const response = await csrfFetch(`/api/locations/${id}`);

    if (response.ok) {
        const location = await response.json();
        dispatch(selectLocal(location));
        return location;
    }
}

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
        case SELECT_LOCATION: {
            // const newLocation = {};
            // action.location.forEach(location => {
            //     newLocation[location.id] = location;
            // });
            return action.location;
        }
        default:
            return state;
    }
}

export default locationsReducer;
