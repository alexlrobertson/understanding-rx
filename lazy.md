RxJS Observables are often compared to Promises. Observables clarify async control flows like Promises, but have key differences.

```javascript
(new Promise((resolve) => {
    setTimeout(() => {
        console.log('fired');
        resolve(42);
    }, 100);
})).then((result) => {
    console.log(result); // 42
});

rx.Observable.create((observer) => {
    setTimeout(() => {
        console.log('fired');
        observer.onNext(42);
    }, 100);
})
    .subscribe((42) => {
        console.log(result); // 42
    });
```

After a slight delay, both implementations log `42` after reporting that the timer `fired`.

The key difference is that Observables are lazy and Promises are not.

```javascript
new Promise((resolve) => {
    setTimeout(() => {
        console.log('fired');
        resolve(42);
    }, 100);
});

var disposable = rx.Observable.create((observer) => {
    var timerId = setTimeout(() => {
        console.log('fired');
        observer.onNext(42);
    }, 100);

    return () => {
        console.log('cleaning up');
        clearTimeout(timerId);
    };
});

disposable.dispose();
```

A Promise will always fire the initialization function. When you create a Promise, by the time you have access to it, it will have set up.

Observables have the ability to tear down their setup. They return a disposable that allows you to call `dispose` and cancel any impending effects. While Observables can be cancelled, they do so in a why that retains a closed implementation.

Observables also can be called again, which will run the setup again. Promises simply resolve to the already established value.

If an Observable errors out, you can resubscribe and try again using `retry` or `retryWhen`.
