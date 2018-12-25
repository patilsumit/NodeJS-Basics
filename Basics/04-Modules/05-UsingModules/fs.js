/* Title: Usage of functions from fs module
 * Description: Sync and Async versions of readdir are invoked
 * readdir function returns the list of files in a directory
 * Sync function throw exception. Enclose in try catch
 * Async functions do not throw exception, they return error
 */

// Include fs module
const fs = require('fs');
const util = require('util');

// Use Synchronous method to list filename in CWD
try {
    const files = fs.readdirSync('.'); //Try invalid path
    console.log(files);
}
catch (err) {
    util.log(err.message);
}

/* Use Async method. Async methods are non-blocking.
 * They return immediately after invocation. On completion
 * of operation, a callback is invoked to signal completion
 */

fs.readdir('.', (err, files) => { //Try invalid path
    if (err)
        console.log("Error", err);
    else {
        console.log('Result', files);
    }

});

console.log('Awaiting result from readdir');
