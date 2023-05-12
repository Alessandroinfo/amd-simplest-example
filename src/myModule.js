// Define an AMD module that depends on the "jquery" module
define(["jquery"], function ($) {
    // Define a function "doSomething" that logs to the console
    function doSomething() {
        // Code here
        console.log($);
        console.log("Done something!");
    }

    // Return an object that contains the "doSomething" method
    return {
        doSomething: doSomething
    };
});
