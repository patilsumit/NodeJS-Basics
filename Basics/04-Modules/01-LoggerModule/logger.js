/* Title: Logger Utility Library
 * Description: Define functions and export them
 */

function logInfo(mesg){
     console.info(mesg);
}

function logError(mesg){
    console.error(mesg);
}

function junk(mesg)
{
    console.error(mesg);
}

// Export the functions
module.exports.logInfo = logInfo;
module.exports.logError = logError;
