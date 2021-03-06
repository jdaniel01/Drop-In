import { csrfFetch } from './csrf';

const initialState = { user: null };

const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    };
};

const removeUser = (user) => {
    return {
        type: REMOVE_USER
    };
};


export const loginUser = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            credential,
            password
        })
    })
    if (res.ok) {
        const sessionUser = await res.json();
        dispatch(setUser(sessionUser.user))
        return res;
    }
}

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const logoutUser = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};


export default sessionReducer;
