// Include events module
const EventEmitter = require('events');

// Define Logger class, inherit from EventEmitter
class Logger extends EventEmitter {

    // Define the log method
    log(message) {
        console.log(message);
        //Trigger event
        this.emit('messageLogged', new Date());
    }
}

//Export Logger class as Module
module.exports = Logger;