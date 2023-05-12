define(["jquery"], function ($) {
    function doSomething() {
        // Code here
        console.log($);
        console.log("Done something!");
    }

    // Ritorna un oggetto contenente il metodo "doSomething"
    return {
        doSomething: doSomething
    };
});
