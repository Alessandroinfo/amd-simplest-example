requirejs.config({
    appDir: ".",
    baseUrl: "",
    paths: {
        /* Load jquery from cdnjs. On fail, load local file. */
        'jquery': ['//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min', 'libs/jquery-min']
    }
});

require(["myModule"], function (myModule) {
    // Usa il metodo "doSomething" definito nel modulo
    myModule.doSomething();
});
