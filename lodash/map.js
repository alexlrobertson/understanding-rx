const _ = require('lodash');
const Rx = require('rx');

_([1, 2, 3])
    .map(function (item) {
        return {
            value: item
        };
    })
    .tap(console.log)
    .value()
    
// [ { value: 1 }, { value: 2 }, { value: 3 } ]

Rx.Observable.range(1, 3)
    .map(function (item) {
        return {
            value: item
        };
    })
    .toArray()
    .subscribe(console.log);

// [ { value: 1 }, { value: 2 }, { value: 3 } ]
