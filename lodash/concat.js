const _ = require('lodash');
const Rx = require('rx');

_([1, 2, 3])
    .concat([4, 5, 6])
    .tap(console.log)
    .value()
    
// [1, 2, 3, 4, 5, 6]

Rx.Observable.range(1, 3)
    .concat(Rx.Observable.range(4, 3))
    .toArray()
    .subscribe(console.log);

// [1, 2, 3, 4, 5, 6]
