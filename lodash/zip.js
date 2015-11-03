const _ = require('lodash');
const Rx = require('rx');

_(_.range(1, 4))
    .zip(_.range(4, 7))
    .tap(console.log)
    .value()
    
// [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]

Rx.Observable.range(1, 3)
    .zip(Rx.Observable.range(4, 3))
    .toArray()
    .subscribe(console.log);

// [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
