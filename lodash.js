import Rx from 'rx';

var source = Rx.Observable.range(1, 100)
    .map((x, idx, obs) => {
        return x * x;
    })
	.filter((x) => x % 3 === 0);

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

