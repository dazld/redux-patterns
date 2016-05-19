import Promise from 'bluebird';

export function echo(value, shouldThrow = false) {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            if (shouldThrow) {
                rej(new Error('I am an error bip bop'));
            } else {
                res(value);
            }
        }, 3000);
    });
}

export function increment(value, shouldThrow) {
    return echo(value + 1, shouldThrow);
}

export function decrement(value, shouldThrow) {
    return echo(value - 1, shouldThrow);
}
