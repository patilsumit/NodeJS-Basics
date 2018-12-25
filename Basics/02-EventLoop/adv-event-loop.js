/* Title: Program illustrating Event Loop and scheduling of Async functions
 * Description: Here the timer is set with zero delay.
 * What will be the execution order?
 */

// Delay function (Blocking)
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

console.log("Begin");

setTimeout(function cb() {
    console.log("Time out");
}, 0); // Delay is zero

var i = 5;
while (i > 0) {
    console.log("End");
    sleep(500);
    i--;
}
