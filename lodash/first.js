const _ = require('lodash');
const Rx = require('rx');

console.log(_(_.range(1, 3))
    .first());

Rx.Observable.range(1, 3)
    .first()
    .subscribe(console.log);
