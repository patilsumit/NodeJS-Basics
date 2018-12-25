/* Title: Usage of functions from os module
 * Description: Prints username, and memory info
 */

//Import OS module
const os = require('os');

var username = os.userInfo().username;
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log("Username: " + username);
console.log('Total Memory: ' + totalMem);
console.log(`Free Memory: ${freeMem}`);
