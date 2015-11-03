const _ = require('lodash');
const Rx = require('rx');

console.log(
    _([1, 2, 3])
        .reduce(function (memo, item) {
            return memo + item;
        }, 42)
)
    
// 48

Rx.Observable.range(1, 3)
    .reduce(function (memo, item) {
        return memo + item;
    }, 42)
    .subscribe(console.log);

// 48
