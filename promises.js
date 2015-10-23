import Rx from 'rx';

function reportError(reason) {
    console.error(`Errored because: ${reason}`);
}

Rx.Observable.fromPromise(Promise.resolve(42))
    .subscribe(console.log, reportError, () => {
        console.log('completed');
    });

// 42
// completed

Rx.Observable.fromPromise(Promise.reject('something went wrong'))
    .subscribe(console.log, reportError, () => {
        console.log('completed');
    });

// Errored because: something went wrong

Rx.Observable.merge(
    [
        Rx.Observable.fromPromise(Promise.resolve('a')),
        Rx.Observable.fromPromise(Promise.resolve('b')),
        Rx.Observable.fromPromise(Promise.resolve('c'))
    ]
)
    .subscribe(console.log, reportError, () => {
        console.log('completed');
    });

// a
// b
// c
// completed
