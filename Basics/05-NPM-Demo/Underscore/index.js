/* Title: Demonstrates use of underscore module from NPM
 * Description: Use utility functions from underscore module
 * Package URL: https://www.npmjs.com/package/underscore
 */

// Include the module. Note: variable name is '_'
var _ = require('underscore');
//loadash
var arr = [1, 2, 3];
var newArr = _.map(arr, function(num){ return num * 3; });
console.log(newArr);

var isPresent = _.contains(arr, 2);
console.log(isPresent);

var seq = _.range(10); // Generate sequence 0, 1, 2, ... 9
console.log(seq);
