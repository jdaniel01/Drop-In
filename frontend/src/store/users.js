import {csrfFetch} from './csrf';

export const LOAD_PROFILE = 'users/LOAD_PROFILE';

const loadProfile = (profile) => ({
    type: LOAD_PROFILE,
    profile
});

export const getProfile = (id) => async dispatch => {
    const response = await csrfFetch(`/api/users/profile/${id}`);

    if (response.ok) {
        const profile = response.json();
        dispatch(loadProfile(profile));
        return profile;
    }
}

const initialState = {}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROFILE: {
            return state;
        }
        default:
            return state;
    }
}

export default usersReducer;
