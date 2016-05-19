import { echo, increment } from '../lib/echo-api';

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CALCULATE_SIN = 'CALCULATE_SIN';
export const CHANGE_STATUS ='CHANGE_STATUS';

function addthings(newvalue) {
    return {
        type: CHANGE_VALUE,
        payload: newvalue
    };
}

function calcSin(value) {
    return {
        type: CALCULATE_SIN,
        payload: Math.sin(value)
    };
}

function changeOperatingStatus(status) {
    return {
        type: CHANGE_STATUS,
        payload: status
    };
}

export function addStuff(value, shouldThrow = false) {
    return function(dispatch) {
        // this function returns a promise
        return increment(value, shouldThrow)
                .then(function(result) {
                    dispatch(addthings(result));
                    return result;
                });
    };
}

export function sine(value) {
    return function(dispatch) {
        // this function returns a promise
        dispatch(changeOperatingStatus(true));
        return echo(value)
                .then(function(result) {
                    dispatch(changeOperatingStatus(false));
                    dispatch(calcSin(result));
                    return result;
                });
    };
}
