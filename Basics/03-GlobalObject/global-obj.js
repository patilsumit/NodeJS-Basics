/* Title: Global object, and variable scope
 * Description: In Node there is no window or document object defined.
 * Instead we have global object.
 */

console.log("===================== Global Object ====================");
console.log(global);
console.log("========================================================");

/* Unlike browser based js, variables are not part of global object.
 * Instead they belong to the file/module scope
 */

var city = 'bangalore';
console.log("global.city: " + global.city); // Not valid

// window and document objects are not defined in node
console.log(window); // Should throw an execption
//console.log(document);
