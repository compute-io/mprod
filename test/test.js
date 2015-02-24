/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	mprod = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-mprod', function tests() {

	it( 'should export a function', function test() {
		expect( mprod ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				mprod( value , 3 );
			};
		}
	});

	it( 'should throw an error if not provided a window size which is a positive integer', function test() {
		var values = [
			'5',
			2.7,
			-3,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				mprod( [] , value );
			};
		}
	});

	it( 'should throw an error if the window size is exceeds the array size', function test() {
		var data = [ 1, 2, 3 ];

		expect( foo ).to.throw( Error );

		function foo() {
			mprod( data, data.length+1 );
		}
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			3,
			true,
			undefined,
			null,
			NaN,
			{},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				mprod( [1,2], 2, value );
			};
		}
	});

	it( 'should compute a moving product', function test() {
		var data, actual, expected, W;

		// Define a window size:
		W = 3;

		// Simulate some data:
		data = [ 2, 4, 4, 6, 2, 3, 5, 1, 5, 3, 7, 5, 0, 2, 3, 1];

		// Expected values:
		expected = [ 32, 96, 48, 36, 30, 15, 25, 15, 105, 105, 0, 0, 0, 6];

		actual = mprod( data, W );

		assert.strictEqual( actual.length, data.length-W+1 );
		assert.deepEqual( actual, expected );
	});

	it( 'should compute a moving product using an accessor function', function test() {
		var data, actual, expected, W;

		// Define a window size:
		W = 3;

		// Simulate some data:
		data = [
			{'x':2},
			{'x':4},
			{'x':4},
			{'x':6},
			{'x':2},
			{'x':3},
			{'x':5},
			{'x':1},
			{'x':5},
			{'x':3},
			{'x':7},
			{'x':5},
			{'x':0},
			{'x':2},
			{'x':3},
			{'x':1}
		];

		// Expected values:
		expected = [ 32, 96, 48, 36, 30, 15, 25, 15, 105, 105, 0, 0, 0, 6];

		actual = mprod( data, W, getValue );

		assert.strictEqual( actual.length, data.length-W+1 );
		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
