import { CALCULATE_SIN } from '../actions/my-counter';

function anotherCounter (state = 0, action) {
    switch (action.type) {
        case CALCULATE_SIN:
            state = action.payload;
            break;
        default:
            break;
    }
    return state;
}

export default anotherCounter;
