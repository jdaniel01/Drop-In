import {csrfFetch} from './csrf';

let locations;

async function getLocations() {
    let data = await csrfFetch('/api')
}
