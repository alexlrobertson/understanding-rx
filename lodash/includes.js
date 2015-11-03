const _ = require('lodash');
const Rx = require('rx');

console.log(
    _([1, 2, 3])
        .includes(2)
)

console.log(
    _([1, 2, 3])
        .includes(42)
)
    
// true
// false

Rx.Observable.range(1, 3)
    .includes(2)
    .subscribe(console.log);

Rx.Observable.range(1, 3)
    .includes(42)
    .subscribe(console.log);

// true
// false
