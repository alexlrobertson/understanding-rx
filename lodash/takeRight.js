const _ = require('lodash');
const Rx = require('rx');

_([1, 2, 3])
    .takeRight(2)
    .tap(console.log)
    .value()
    
// [2, 3]

Rx.Observable.range(1, 3)
    .takeLast(2)
    .toArray()
    .subscribe(console.log);

// [2, 3]
