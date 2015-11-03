const _ = require('lodash');
const Rx = require('rx');

_([1, 2, 3])
    .take(2)
    .tap(console.log)
    .value()
    
// [1, 2]

Rx.Observable.range(1, 3)
    .take(2)
    .toArray()
    .subscribe(console.log);

// [1, 2]
