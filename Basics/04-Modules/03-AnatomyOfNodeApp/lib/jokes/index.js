/* Title: Jokes Library
 * Description: Utility library for getting a list of Jokes
 */

 // Dependencies
 var fs = require('fs'); //fs is a built in module

 // App object
 var jokes = {};

 // Get all jokes and return it
 jokes.getAllJokes = function(){
    // Read the text file containing the jokes
    var fileContents = fs.readFileSync(__dirname + '/jokes.txt', 'utf-8');

    // Turn the string into an array
    var arrayOfJokes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfJokes;
 }  

 // Export the library
 module.exports = jokes;