import { csrfFetch } from './csrf';
import { ADD_EVENT } from './events';

export const LOAD_RIDERS = 'riders/LOAD_RIDERS';
export const ADD_RIDER = 'riders/ADD_RIDER';
export const DROP_RIDER = 'riders/DROP_RIDER';


const loadRiders = (riders) => ({
    type: LOAD_RIDERS,
    riders
});

const addRider = (rider) => ({
    type: ADD_RIDER,
    rider
});

const dropRider = (rider) => ({
    type: DROP_RIDER,
    rider
});

export const getRiders = (id) => async dispatch => {
    const response = await csrfFetch(`/api/events/${id}/riders`);

    if (response.ok) {
        const riders = await response.json();
        dispatch(loadRiders(riders));
        return riders;
    }
};

export const addOneRider = (id, user) => async dispatch => {
    const response = await csrfFetch(`/api/events/${id}/riders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    if (response.ok) {
        //Should get back all riders

        const riders = await response.json();
        dispatch(loadRiders(riders));
        return riders;
    }

}

export const dropOneRider = (id, rider) => async dispatch => {
    const response = await csrfFetch(`/api/events/${id}/riders/${rider.id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        //Should get back all riders
        const riders = await response.json();
        dispatch(loadRiders(riders));
        return riders;
    }

}

const initialState = {};

const ridersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RIDERS: {
            const newRiders = {};
            action.riders.forEach(rider => {
                newRiders[rider.id] = rider;
            })
            return {...newRiders};
        }
        case ADD_RIDER: {
            const newRiders = {};
            action.riders.forEach(rider => {
                newRiders[rider.id] = rider;
            })
            return {...newRiders};
        }
        case DROP_RIDER: {
            const newRiders = {};
            action.riders.forEach(rider => {
                newRiders[rider.id] = rider;
            })
            return {...newRiders};
        }
        default:
            return state;
    }
}


export default ridersReducer;
