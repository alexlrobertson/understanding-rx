const _ = require('lodash');
const Rx = require('rx');

console.log(
    _([1, 2, 3])
        .size()
)
    
// 3

Rx.Observable.range(1, 3)
    .count()
    .subscribe(console.log);

// 3
