/* Title: Print module object
 * Description: Display module object (Has file scope)
 * Every file is a module
 */

/* Print module object.
 * Observe the paths property. These are the directories node will search for,
 * when we include a module using require function. Note the order. This excludes
 * the node install directory for builtin and global modules.
 */
console.log(module);
