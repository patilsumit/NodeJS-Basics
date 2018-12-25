/* Title: Log message using logger user defined module
 * Description: Demonstrates the use of require function to
 * include user defined module/file. In this case we include logger.js
 * from the CWD (current working directory)
 */

// Include the dependencies
var logObj = require('./logger'); // Note .js extension is not required
//var logObj = require('./logger.js');

// Invoke the logInfo function from logger.js
logObj.logInfo("This is a message");

// Invoke the logError function from logger.js
logObj.logError("This is an error");
