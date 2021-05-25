import {csrfFetch} from './csrf';

export const LOAD_TRICKS = 'tricks/LOAD_TRICKS';

const loadTricks = (tricks, sportId) => ({
    type: LOAD_TRICKS,
    tricks,
    sportId
})

export const getTricks = (id) => async dispatch => {
    const response = await csrfFetch(`/api/sports/${id}/tricks`);
    if(response.ok){
        const tricks = await response.json();
        dispatch(loadTricks(tricks, id));
    }
};

const initialState = {};

const tricksReducer = (state = initialState, action) => {
    switch(action.tricks) {
        case LOAD_TRICKS: {
            const tricks = {};
            action.tricks.forEach(trick => {
                tricks[trick.id] = trick;
            });
            return {...state, ...tricks}
        }
        default:
            return state;
    }
}

export default tricksReducer;
