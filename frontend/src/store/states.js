import { csrfFetch } from "./csrf";

export const LOAD_STATES = 'states/LOAD_STATES';

const loadStates = (states, countryId) => ({
    type: LOAD_STATES,
    states,
    countryId
});

export const getStates = (id) => async dispatch => {
    const response = await csrfFetch(`/api/countries/${id}/states`);

    if(response.ok) {
        const states = await response.json();
        dispatch(loadStates(states, id));
    }
};

const initialState = {};

const statesReducer = (state = initialState, action) => {
    switch (action.states) {
        case LOAD_STATES: {
            const newStates = {};
            action.states.forEach(state2 => {
                newStates[state.id] = state2;
            })
            return {...state, ...newStates}
        }
        default:
            return state;
    }
}


export default statesReducer;
