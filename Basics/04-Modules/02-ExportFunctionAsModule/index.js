/* Title: Test program to include a module exporting a function
 * Description: Here logger module exports a single function
 */

/* Load logger module form CWD
 * Here log is a function, not an object (Refer module.exports in logger.js)
 */
const log = require('./logger'); //log refers to log function

// Use log function directly now
log("Hello World");

