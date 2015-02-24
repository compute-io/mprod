Moving Product
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes a moving product over an array.


## Installation

``` bash
$ npm install compute-mprod
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var mprod = require( 'compute-mprod' );
```

#### mprod( arr, window[, accessor] )

Slides a `window` over an `array` to compute a moving product. For primitive `arrays`,

``` javascript
var data = [ 1, 2, 3, 4, 5 ];

var arr = mprod( data, 2 );
// returns [ 2, 6, 12, 20 ]
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var data = [
	{'x':1},
	{'x':2},
	{'x':3},
	{'x':4},
	{'x':5}
];

function getValue( d ) {
	return d.x;
}

var arr = mprod( data, 2, getValue );
// returns [ 2, 6, 12, 20 ]
```

__Note__: the returned `array` has length `L - W + 1`, where `L` is the length of the input `array` and `W` is the `window` size.


## Examples

``` javascript
var mprod = require( 'compute-mprod' );

// Simulate some data...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*10 ) + 1;
}
// Compute the moving product:
var arr = mprod( data, 7 );

console.log( arr.join( '\n' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Philipp Burckhardt.


[npm-image]: http://img.shields.io/npm/v/compute-mprod.svg
[npm-url]: https://npmjs.org/package/compute-mprod

[travis-image]: http://img.shields.io/travis/compute-io/mprod/master.svg
[travis-url]: https://travis-ci.org/compute-io/mprod

[coveralls-image]: https://img.shields.io/coveralls/compute-io/mprod/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/mprod?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/mprod.svg
[dependencies-url]: https://david-dm.org/compute-io/mprod

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/mprod.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/mprod

[github-issues-image]: http://img.shields.io/github/issues/compute-io/mprod.svg
[github-issues-url]: https://github.com/compute-io/mprod/issues
