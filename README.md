## AMD simplest example

### Require JS
It's imported in the `index.html` file.

This is an HTML file that includes a script tag to load RequireJS from a CDN. It also includes a script tag to load "main.js" file as an AMD module using the "type" attribute set to "module". The "main.js" file should be placed in the same directory as this HTML file.

### main.js
The index.html also include the `main.js` script

RequireJS configuration is defined using the `config()` method. The configuration specifies the `appDir` and `baseUrl` properties, which define the base directory and URL for the application, respectively. The `paths` property defines the module paths for the application.

The `paths` property specifies the path for the "jquery" module. It first tries to load the module from the CDN at the specified URL, and if that fails, it loads the local file at "libs/jquery-min.js". This allows the application to fallback

### myModule.js
This is an AMD module that defines a single function, "doSomething", that logs to the console. The module depends on the "jquery" module, which is passed as an argument to the module function and assigned to the $ parameter.

The module function returns an object with a single property, "doSomething", which references the function defined earlier. This allows other modules to use this module by loading it with RequireJS and calling its "doSomething" method.

When this module is loaded, RequireJS will ensure that the "jquery" module is loaded first, so that it can be passed as an argument to the module function.
