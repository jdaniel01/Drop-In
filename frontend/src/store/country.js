import { csrfFetch } from './csrf';
import {GET_STATES} from './states';


const LOAD_COUNTRIES = 'country/LOAD_COUNTRIES';

const loadCountries = (countries) => ({
    type: LOAD_COUNTRIES,
    countries
})


export const getAllCountries = () => async dispatch => {
    const response = await csrfFetch('/api/countries');

    if (response.ok) {
        const countries = await response.json();
        dispatch(loadCountries(countries));
    }
}

const initialState = {
    countries: null,
    states: [],
}


const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_COUNTRIES: {
            const allCountries = {};
            action.countries.forEach(country => {
                allCountries[country.id] = country;
            });
            return {
                ...allCountries, ...state
            }
        }
        default:
            return state;
    }
}

export default countryReducer;
