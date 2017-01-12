(function () {
    var $ = window;
    var Package = function () {
    };
    Object.defineProperty(Package, "Packages", {
        configuration: true,
        enumerable: true,
        writable: true,
        value: {}
    });
    Object.defineProperty(Package, "PackagesDefinitions", {
        configuration: true,
        enumerable: true,
        writable: true,
        value: {}
    });
    Object.defineProperty(Package, "_LoadPackage", {
        configuration: true,
        enumerable: true,
        writable: true,
        value: function (moduleName) {
            var def = Package.PackagesDefinitions[moduleName];
            def.Loaded = true;
            def.Cons();
        }
    });
    Object.defineProperty(Package, "Define", {
        configuration: true,
        enumerable: true,
        writable: true,
        value: function () {
            var moduleName = arguments[0];
            Package.PackagesDefinitions[moduleName] = { Dependency: [] };
            var def = this.PackagesDefinitions[moduleName];
            var cons = arguments[1];
            def.Loaded = false;
            def.Dependency = [];
            def.Cons = function () {

                var objs = cons();
                var pkg = {};
                for (var i in objs) {
                    pkg[i] = objs[i];
                }
                Package.Packages[moduleName] = pkg;
            };
            Package._LoadPackage(moduleName);
        }
    });
    $.Package = Package;
    Package.Define("Main", function () {
        function A() {
            console.log("module A");
        }
        function B() {
            console.log("module B");
        }
        return {
            A: A,
            B: B
        }
    });
    console.log(Package.Packages);
})(window);