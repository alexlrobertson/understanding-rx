# Lodash and Rx

Typically if a Lodash function returns a collection, in Rx it emits the values to subscribers.

## TLDR

lodash      | Rx       | Equality
------------|----------|---------
concat      | concat   | [`=`](#concat)
filter      | filter   | [`=`](#filter)
first       | first    | [`~`](#first)
groupBy     | groupBy  | ~
includes    | includes | ~
last        | last     | ~
map         | map      | =
pluck       | pluck    | =
reduce      | reduce   | ~
size        | count    | ~
tap         | tap      | =
take        | take     | =
takeRight   | takeLast | =
takeWhile   | takeWhile| =
zip         | zip      | =

## concat

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

## filter

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

## first

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

## groupBy

`groupBy` works similarly between Lodash and Rx. Rx’s implementation emits Observables whereas Lodash results in an key/value object where the key is the value used to group and the value is an array of selected items.

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

## includes

`includes` works similarly between Lodash and Rx. Rx emits a singular boolean value whereas Lodash ends the chain and returns the boolean value.

```js
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
```

## last

`last` works similarly between Lodash and Rx, like [`first`](#first). Rx emits a singular value whereas Lodash ends the chain and returns the value.

```js
console.log(
    _([1, 2, 3])
        .last()
)

// 3

Rx.Observable.range(1, 3)
    .last()
    .subscribe(console.log)

// 3
```

## map

`map` works equivalently between Lodash and Rx.

```js
_([1, 2, 3])
    .map(function (item) {
        return {
            value: item
        };
    })
    .tap(console.log)
    .value()
    
// [ { value: 1 }, { value: 2 }, { value: 3 } ]

Rx.Observable.range(1, 3)
    .map(function (item) {
        return {
            value: item
        };
    })
    .toArray()
    .subscribe(console.log);

// [ { value: 1 }, { value: 2 }, { value: 3 } ]
```
