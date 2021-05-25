import { csrfFetch } from './csrf';


export const LOAD_COUNTRIES = 'countries/LOAD_COUNTRIES';

const loadCountries = (countries) => ({
    type: LOAD_COUNTRIES,
    countries
})


export const getCountries = () => async dispatch => {
    const response = await csrfFetch('/api/countries');

    if (response.ok) {
        const countries = await response.json();
        dispatch(loadCountries(countries));
    }
}

const initialState = {}


const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_COUNTRIES: {
            const newCountries = {};
            action.countries.forEach(country => {
                newCountries[country.id] = country;
            });
            return {
                ...newCountries, ...state
            }
        }
        default:
            return state;
    }
}

export default countriesReducer;
