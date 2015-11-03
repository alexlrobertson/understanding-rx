const _ = require('lodash');
const Rx = require('rx');

_([1, 2, 3])
    .filter(function (value) {
        return value % 2 !== 0;
    })
    .tap(console.log)
    .value()

// [1, 3]

Rx.Observable.range(1, 3)
    .filter(function (value) {
        return value % 2 !== 0;
    })
    .toArray()
    .subscribe(console.log)

// [1, 3]
