import { echo, increment } from '../lib/echo-api';

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CALCULATE_SIN = 'CALCULATE_SIN';

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

export function addStuff(value) {
    return function(dispatch) {
        // this function returns a promise
        return increment(value)
                .then(function(result) {
                    dispatch(addthings(result));
                    return result;
                });
    };
}

export function sine(value) {
    return function(dispatch) {
        // this function returns a promise
        return echo(value)
                .then(function(result) {
                    dispatch(calcSin(result));
                    return result;
                });
    };
}
