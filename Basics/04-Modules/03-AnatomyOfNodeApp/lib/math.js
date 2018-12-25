/* Title: Math Library
 * Description: Utility library for math related function
 */

 // App object
 var math = {};

 // Function to return a random number between 2 numbers
 math.getRandomNumber = function(min, max){
    var randomVal = (Math.random() * (max - min + 1)) + min;
    randomVal = Math.floor(randomVal);

    return randomVal;
 }

 // Export the library
 module.exports = math;
