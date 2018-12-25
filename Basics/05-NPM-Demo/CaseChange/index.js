/* Title: Demonstrates use of change-case module from NPM
 * Description: Invokes functions to change case.
 * Package URL: https://www.npmjs.com/package/change-case
 */

// Include module change-case
var changeCase = require('change-case');

var res;

res = changeCase.upper("hello");
console.log(res);

console.log(changeCase.camelCase("do some work"));

console.log(changeCase.titleCase("do some work"));
