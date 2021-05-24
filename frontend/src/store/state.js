export const LOAD_STATES = 'states/LOAD_STATES';

const loadStates = (states, countryId) => ({
    type: LOAD_STATES,
    states,
    countryId
});

export const getStates = (id) => async dispatch => {
    const response = await fetch(`/api/countries/${id}/states`);

    if(response.ok) {
        const states = await response.json();
        dispatch(loadStates(states, id));
    }
};
