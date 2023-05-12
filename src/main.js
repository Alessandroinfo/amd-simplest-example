// Configure RequireJS with the base directory, base URL, and module paths
requirejs.config({
    appDir: ".",
    baseUrl: "",
    paths: {
        // Define the module paths
        'jquery': ['//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min', 'libs/jquery-min']
    }
});

// Load the "myModule" module and use its "doSomething" method
require(["myModule"], function (myModule) {
    // Use the "doSomething" method defined in the module
    myModule.doSomething();
});
