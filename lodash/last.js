const _ = require('lodash');
const Rx = require('rx');

console.log(
    _([1, 2, 3])
        .last()
)

// 3

Rx.Observable.range(1, 3)
    .last()
    .subscribe(console.log)

// 3
