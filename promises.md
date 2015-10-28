# `$q.all` and `_`

This:

```javascript
return $q.all(_.map(array, fn));
``` 

Is equivalent to:

```javascript
return rx.Observable.from(array)
    .flatMap(fn)
    .toArray()
    // optional
    .toPromise($q);
```

While this example is trivial, and perhaps more convoluted initially, consider as more transformations are applied to the process.

This:

```javascript
return $q.all(
    _(array)
        .map(preProcessArray)
        .map(fn)
        .value()
)
    .then(function (results) {
        doSomethingWithAsyncResults(results);
    });
``` 

Is equivalent to:

```javascript
return rx.Observable.from(array)
    .map(preProcessArray)
    .flatMap(fn)
    .map(doSomethingWithAsyncResults)
    .toArray()
    // optional
    .toPromise($q);
```

The flow is flattened and clarified. Less context switching between `lodash`, `Promises`, and synchronous styles is required. The entire flow is thought of as transformations on a stream rather than chains of synchronous operations and single async operations.
