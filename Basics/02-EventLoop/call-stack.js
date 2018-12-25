/* Title: Call stack illustration
 * Description: Illustrates how function stack works
 */

function bar() {
    console.log("In bar");
}

function foo() {
    console.log("In foo");
    bar();
}

function main() {
    console.log("In main");
    foo();
    console.log("We are done");
}

main();
