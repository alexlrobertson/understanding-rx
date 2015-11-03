# understanding-rx

This guide is assuming a background in Lodash’s functional programming style and ES2015’s aynchronous Promise functionality.

The RxJS library improves on and integrates ideas from both styles of programming to create “a set of libraries to compose asynchronous and event-based programs using observable collections and Array#extras style composition in JavaScript.” [[0]](#0)

> Using RxJS, developers represent asynchronous data streams with Observables, query asynchronous data streams using our many operators, and parameterize the concurrency in the asynchronous data streams using Schedulers. Simply put, RxJS = Observables + Operators + Schedulers.

RxJS presents a low level, standardized API to subscribe to changes in data.

## Scope

Data-bound frameworks like Angular have capitalized on checking for changes on application data and informing parts of the application that relevant data has been changed. Frameworks frequently implement this data-binding using dirty checking where scopes are scanned for changes [[1]](#1).

## Lodash

Rx’s enables functional programming in similar ways to other function libraries, but over observable collections. [Lodash](https://github.com/alexlrobertson/understanding-rx/blob/master/lodash.md) is a frequently used javascript library and has many equivalent functions in Rx.

## TODO

* Angular 2
* Promises
* Websockets
* DOM events

## References

<a id="0"></a>
[0] [https://github.com/Reactive-Extensions/RxJS](https://github.com/Reactive-Extensions/RxJS)

<a id="1"></a>
[1] [http://stackoverflow.com/questions/15112584/angularjs-using-scope-watch-and-scope-apply/15113029#15113029](http://stackoverflow.com/questions/15112584/angularjs-using-scope-watch-and-scope-apply/15113029#15113029)
