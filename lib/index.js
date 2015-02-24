/**
*
*	COMPUTE: mprod
*
*
*	DESCRIPTION:
*		- Computes a moving product over an array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Philipp Burckhardt.
*
*
*	AUTHOR:
*		Philipp Burckhardt. pburckhardt@outlook.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isPositiveInteger = require( 'validate.io-positive-integer' );


// MOVING PRODUCT //

/**
* FUNCTION: mprod( arr, window[, accessor] )
*	Computes a moving product over an array.
*
* @param {Array} arr - array of values
* @param {Number} window - size of moving window
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Array} array of window products
*/
function mprod( arr, W, clbk ) {
	var len,
		out,
		val,
		p,
		i, j;
	if ( !isArray( arr ) ) {
		throw new TypeError( 'mprod()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	len = arr.length;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'mprod()::invalid input argument. Window must be a positive integer. Value: `' + W + '`.' );
	}
	if ( W > len ) {
		throw new Error( 'mprod()::invalid input argument. Window cannot exceed the array length.' );
	}
	if ( arguments.length > 2 ) {
		if ( typeof clbk !== 'function' ) {
			throw new TypeError( 'mprod()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
		}
	}
	len = len - W + 1;
	out = new Array( len );

	// NOTE: unlike sum, mean, and other moving calculations, a simple in-place update procedure is hard to come by. Instead, the straightforward solution of two FOR loops is used. While possibly not optimal, this solution requires fewer conditionals and is arguably easier to maintain.
	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			p = 1;
			for ( j = i; j < i+W; j++ ) {
				val = clbk( arr[ j ] );
				if ( val === 0 ) {
					p = 0;
					break;
				}
				p *= val;
			}
			out[ i ] = p;
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			p = 1;
			for ( j = i; j < i+W; j++ ) {
				val = arr[ j ];
				if ( val === 0 ) {
					p = 0;
					break;
				}
				p *= val;
			}
			out[ i ] = p;
		}
	}
	return out;
} // end FUNCTION mprod()


// EXPORTS //

module.exports = mprod;
