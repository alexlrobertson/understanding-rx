const _ = require('lodash');
const Rx = require('rx');

_([1, 2, 3])
    .map(function (item) {
        return {
            value: item
        };
    })
    .pluck('value')
    .tap(console.log)
    .value()
    
// [1, 2, 3]

Rx.Observable.range(1, 3)
    .map(function (item) {
        return {
            value: item
        };
    })
    .pluck('value')
    .toArray()
    .subscribe(console.log);

// [1, 2, 3]
