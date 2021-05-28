import { csrfFetch } from "./csrf";

export const LOAD_SPORTS = 'sports/LOAD_SPORTS';

const loadSports = (sports) => ({
    type: LOAD_SPORTS,
    sports,
});

export const getSports = () => async dispatch => {
    const response = await csrfFetch(`/api/sports`);

    if (response.ok) {
        const sports = await response.json();
        dispatch(loadSports(sports));
    }
};

const initialState = {};

const sportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SPORTS: {
            const newSports = {};
            action.sports.forEach(sport => {
                newSports[sport.id] = sport;
            });
            return { ...newSports }
        }
        default:
            return state;
    }
}

export default sportsReducer;
