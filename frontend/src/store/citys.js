import { csrfFetch } from "./csrf";

export const LOAD_CITIES = 'cities/LOAD_CITIES';

const loadCities = (cities, stateId) => ({
    type: LOAD_CITIES,
    cities,
    stateId
});

export const getCities = (id) => async dispatch => {
    const response = await csrfFetch(`/api/states/${id}/cities`)

    if(response.ok) {
        const cities = await response.json();
        dispatch(loadCities(cities, id));
    }
};

const initialState = {};

const citiesReducer = (state = initialState, action) => {
    switch (action.cities) {
        case LOAD_CITIES: {
            const cities = {};
            action.cities.forEach(city => {
                cities[city.id] = city;
            });
            return {...state, ...cities}
        }
        default:
            return state;
    }
}

export default citiesReducer;
