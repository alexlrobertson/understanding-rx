lodash      | Rx
------------|---
concat      | concat
filter      | filter
first       | first
groupBy     | groupBy
includes    | contains
last        | last
map         | map
pluck       | pluck
reduce      | reduce
size        | count
tap         | tap
take        | take
takeRight   | takeLast
takeWhile   | takeWhile
zip         | zip

# concat

`concat` translates exactly as you would expect between Lodash and Rx. It appends a series to the end of another series.

```js
_(_.range(1, 3))
    .concat([4, 5, 6])
    .tap(console.log)
    .value()
    
// [1, 2, 3, 4, 5, 6]

Rx.Observable.range(1, 3)
    .concat(Rx.Observable.range(4, 3))
    .toArray()
    .subscribe(console.log);

// [1, 2, 3, 4, 5, 6]
```

# filter

`filter` translates exactly as you would expect between Lodash and Rx. It filters out items that fail the predicate.

```js
_(_.range(1, 3))
    .filter(function (value) {
        return value % 2 !== 0;
    })
    .tap(console.log)
    .value()

// [1, 3]

Rx.Observable.range(1, 3)
    .filter(function (value) {
        return value % 2 !== 0;
    })
    .toArray()
    .subscribe(console.log)

// [1, 3]
```

# first

`first` translates roughly to the same function in Rx. Lodash’s implementation returns the first value, whereas Rx’s implementation returns an Observable sequence with only the first value.

```js
console.log(
    _.first(
        _.range(1, 3)
    )
);

// 1

Rx.Observable.range(1, 3)
    .first()
    .subscribe(console.log);

// 1
```

# groupBy

```js
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
```
