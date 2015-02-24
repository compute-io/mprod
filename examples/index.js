'use strict';

var mprod = require( './../lib' );

// Simulate some data...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*10 ) + 1;
}
// Compute the moving product:
var arr = mprod( data, 7 );

console.log( arr.join( '\n' ) );
