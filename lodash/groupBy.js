const _ = require('lodash');
const Rx = require('rx');

_(_.range(1, 4))
    .concat(_.range(1, 4))
    .groupBy(function (item) {
        return item;
    })
    .toArray()
    .tap(console.log)
    .value()

// [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]

Rx.Observable.range(1, 3)
    .concat(Rx.Observable.range(1, 3))
    .groupBy(function (item) {
        return item;
    })
    .flatMap(function (obs) {
        return obs.toArray();
    })
    .toArray()
    .subscribe(console.log)

// [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]
