import { CHANGE_VALUE } from '../actions/my-counter';

function myCounter (state = 0, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            state = action.payload;
            break;
        default:
            break;
    }
    return state;
}

export default myCounter;
