import { csrfFetch } from './csrf';

export const LOAD_EVENTS = 'events/LOAD_EVENTS';
export const ADD_EVENT = 'events/ADD_EVENT';

const loadEvents = (events) => ({
    type: LOAD_EVENTS,
    events
});

export const addEvent = event => ({
    type: ADD_EVENT,
    event
})

export const getEvents = () => async dispatch => {
    const response = await csrfFetch('/api/events');

    if (response.ok) {
        const events = await response.json();
        dispatch(loadEvents(events));
    }
};


export const addOneEvent = event => async dispatch => {
    const response = await csrfFetch('/api/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    if (response.ok) {
        const event = await response.json();
        dispatch(addEvent(event));
    }
}

const initialState = {};

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EVENTS: {
            const newEvents = {};
            action.events.forEach(event => {
                newEvents[event.id] = event;
            });
            return { ...state, ...newEvents }
        }
        case ADD_EVENT: {
            const newEvent = {
                ...state, [action.event.id]: action.event
            };
            return newEvent
        }
        default:
            return state;
    }
}

export default eventsReducer;
