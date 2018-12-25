//Import Logger
const Logger = require('./logger'); //Logger is a class

// Create a Logger object
const logger = new Logger();

// Listen for messageLogged event
logger.on('messageLogged', function (args) {
    console.log('Event: Message Logged', args)
});

logger.log("Hello World");