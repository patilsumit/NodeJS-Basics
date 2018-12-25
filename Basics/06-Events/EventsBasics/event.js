//Import events module
const EventEmitter = require('events'); //Returns a class
//Create an object
const emitter = new EventEmitter();

//Register an event handler for messageLogged event
emitter.on('messageLogged', () => {
    console.log('Logged a message');
});

console.log("Emit an event");
// Signal/Trigger an event
emitter.emit("messageLogged");

//Register an event handler for initMessage event. Event passes data.
emitter.on('initMessage', (args) => {
    console.log('Init Logger', args);
});


// //Trigger an event with data
emitter.emit("initMessage", {id: 1, url: "http://google.com"} );
