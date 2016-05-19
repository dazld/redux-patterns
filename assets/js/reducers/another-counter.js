import { combineReducers } from 'redux';
import {
    CALCULATE_SIN,
    CHANGE_STATUS
} from '../actions/my-counter';

function status(state = false, action) {
    switch (action.type) {
        case CHANGE_STATUS:
            state = action.payload;
            break;
        default:
            break;
    }
    return state;
}

function value (state = 0, action) {
    switch (action.type) {
        case CALCULATE_SIN:
            state = action.payload;
            break;
        default:
            break;
    }
    return state;
}

export default combineReducers({
    status,
    value
});
