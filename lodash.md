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

```js
_([1, 2, 3])
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

```js
_([1, 2, 3])
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
