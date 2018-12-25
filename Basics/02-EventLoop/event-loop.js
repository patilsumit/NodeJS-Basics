/* Title: Program illustrating Event Loop
 * Description: Call back function is triggered after timeout
 * Program terminates after cb is executed
 */

console.log("Begin");

// Set a timer function with delay at 5000 ms
setTimeout(function cb() {
    console.log("Time out");
}, 5000);

console.log("End");
