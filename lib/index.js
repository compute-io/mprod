/**
*
*	COMPUTE: mprod
*
*
*	DESCRIPTION:
*		- Computes a moving product over a numeric array.
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

// var module_alias = require( 'module_name' );


// FUNCTIONS //

// MOVING PRODUCT //
/**
* FUNCTION: mprod( arr , window )
*	Computes a moving product over an array of values.
*
* @param {Array} arr - array of data values
* @param {Number} window - size of moving window
* @returns {Array} array of window product values
*/
function mprod( arr , W ) {
  if ( !Array.isArray( arr ) ) {
    throw new TypeError( 'mprod()::invalid input argument. Must provide an array.' );
  }
  if ( typeof W !== 'number' || W !== W ) {
          throw new TypeError( 'mprod()::invalid input argument. Window must be numeric.' );
      }
      if ( Math.floor( W ) !== W || W < 1 ) {
          throw new TypeError( 'mprod()::invalid input argument. Window must be a positive integer.' );
      }
  if ( W > arr.length ) {
    throw new Error( 'mprod()::invalid input argument. Window cannot exceed the array length.' );
  }
  var len = arr.length,
    out = new Array( len - W + 1 ),
    prod;

  for ( var i = 0; i < out.length; i++ ) {
    prod = 1;
    for ( var j = i; j < i + W; j++ ) {
      prod *= arr[ j ];
    }
    out[ i ] = prod;
  }
  return out;
} // end FUNCTION mprod()


// EXPORTS //

module.exports = mprod;
