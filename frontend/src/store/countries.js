import { csrfFetch } from './csrf';


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
    countries: [],
}


const countriesReducer = (state = initialState, action) => {
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

export default countriesReducer;
