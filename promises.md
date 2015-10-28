# `$q.all` and `_`

```javascript
$q.all(_.map(array, fn));
``` 

```javascript
rx.Observable.from(array)
    .flatMap(fn)
    .toArray()
    // optional
    .toPromise($q);
```
