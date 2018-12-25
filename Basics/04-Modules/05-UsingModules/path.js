/* Title: Usage of functions from path module
 * Description: Use parse function to parse a path
 */

//Include path module
const path = require('path');

// parse current js file and return an object
var pathObj = path.parse(__filename);
console.log(pathObj);

console.log("\n");
var pathObj = path.parse("/etc/resolv.conf");
console.log(pathObj);

console.log("\n");
var pathObj = path.parse("./path.js");
console.log(pathObj);
