/* Title: Export a single function
 * Description: This module exports a single function
 */

function log(message) {
    console.log(message);
}

//Export log function. Note we are not assigning to module.exports.key = log
module.exports = log;
