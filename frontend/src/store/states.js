import { csrfFetch } from "./csrf";

export const LOAD_STATES = 'states/LOAD_STATES';

const loadStates = (states) => ({
    type: LOAD_STATES,
    states
});

export const getStates = (id) => async dispatch => {
    const response = await csrfFetch(`/api/countries/${id}/states`);

    if(response.ok) {
        const states = await response.json();

        dispatch(loadStates(states));
    }
};

const initialState = {};

const statesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STATES: {
            const newStates = {};
            action.states.forEach(state2 => {
                newStates[state2.id] = state2;
            })
            return newStates;
        }
        default:
            return state;
    }
}


export default statesReducer;
