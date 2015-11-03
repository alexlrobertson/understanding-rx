const _ = require('lodash');
const Rx = require('rx');

_([1, 2, 3])
    .tap(console.log)
    .value()
    
// [1, 2, 3]

Rx.Observable.range(1, 3)
    .toArray()
    .tap(console.log)
    .subscribe();

// [1, 2, 3]
