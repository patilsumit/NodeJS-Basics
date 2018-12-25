/* Title: Print random jokes every 2 seconds
 * Description: Illustrate the use of modules. Emphasises better
 * code organization.
 */

 // Dependencies
 var mathLib = require('./lib/math.js');
 var jokesLib = require('./lib/jokes');

 // App object. All variables and functions are encapsulated in the app
 var app = {};

 //Configuration
 app.config = {
     'timeBetweenJokes': 1500
 };

 // Function to print a random joke
 app.printJoke = function(){
    // Get all the jokes
    var allJokes = jokesLib.getAllJokes();

    // Get the length of the jokes
    var numberOfJokes = allJokes.length;

    // Pick a random number between 1 and number of jokes
    var randomNumber = mathLib.getRandomNumber(1, numberOfJokes);

    // Get a joke at the random position (minus one for array access)
    var selectedJoke = allJokes[randomNumber - 1];

    // Print the joke to console
    console.log(selectedJoke);
 }

 // Function that loops indefinetely, invokes the printJoke function
 app.indefiniteLoop = function(){
     // Create a timer, using config variable
     setInterval(app.printJoke, app.config.timeBetweenJokes);
 }

 // Invoke the Loop
 app.indefiniteLoop();
