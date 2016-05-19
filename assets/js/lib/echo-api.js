import Promise from 'bluebird';

export function echo(value, shouldThrow = false) {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            if (shouldThrow) {
                rej(new Error('I am an error bip bop'));
            } else {
                res(value);
            }
        }, 1000);
    });
}

export function increment(value) {
    return echo(value + 1);
}

export function decrement(value) {
    return echo(value - 1);
}
