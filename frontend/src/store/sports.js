import { csrfFetch } from "./csrf";

export const LOAD_SPORTS = 'sports/LOAD_SPORTS';

const loadSports = (sports) => ({
    type: LOAD_SPORTS,
    sports,
});

export const getSports = (id) => async dispatch => {
    const response = await csrfFetch(`/api/sports`)

    if(response.ok) {
        const sports = await response.json();
        dispatch(loadSports(sports, id));
    }
};

const initialState = {};

const sportsReducer = (state = initialState, action) => {
    switch (action.sports) {
        case LOAD_SPORTS: {
            const sports = {};
            action.sports.forEach(sport => {
                sports[sport.id] = sport;
            });
            return {...state, ...sports}
        }
        default:
            return state;
    }
}

export default sportsReducer;
