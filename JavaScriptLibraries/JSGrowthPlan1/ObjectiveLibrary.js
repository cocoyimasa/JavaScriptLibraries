(function () {
    var UI;
    var Class;
    var Package;

    //Public.StrongTyped
    //Public.New
    function BasicMember() {
        this.Value = null;
        this.AccessLevel = "protected";
    }
    function ProtectedMember(value) {
        
    }
    ProtectedMember.prototype = BasicMember;

    function PublicMember(value) {

    }
    function PrivateMember(value) {

    }
    function BasicType(_Name,_IsType) {
        this.Name = _Name;
        this.IsType = _IsType;
        this.RequireType = function (value) {
            if (!this.IsType(value)) {
                throw new Error("Error Type Of " + _Name);
            }
        }
    }
    Class = function (className, parentClasses) {
        var __Static = new BasicType("<static>");
        var __Const = new BasicType("<const>");

        var __Void = new BasicType("<void>",
            function (value) { return value === undefined;});
        var __Int = new BasicType("<int>",
            function (value) { return typeof value === "int"; });
        var __Float = new BasicType("<float>",
            function (value) { return typeof value === "float"; });
        var __String = new BasicType("<string>",
            function (value) { return typeof value === "string"; });
        var __Bool = new BasicType("<bool>",
            function (value) { return typeof value === "bool"; });
        var __Function = new BasicType("<function>",
            function (value) { return typeof value === "function"; });
        var __Array = new BasicType("<array>",
            function (value) { return value instanceof Array; });

        var _properties = {};
        var _methods = {};
        function Def(members){
            for (var x in members) {
                if (typeof x === 'function') {
                    _methods[x]=members[x];
                }
                else {
                    _properties[x] = members[x];
                }
            }
        }
        function Typed(retType,argumentTypes,func) {
            return function () {
                for (var i = 0; i < argumentTypes.length;i++) {
                    t[i].RequireType(arguments[i]);
                }
                var retValue = func.call(this, arguments);
                retType.RequireType(retValue);
                return func;
            }
        }
        function Method() {
            if (def == undefined || def == null) {
                return;
            }
            for (var obj in def) {
                _properties[obj] = def[obj];
            }
            return this;
        }
        //format : {name:body}
        function Property(){
            if (def == undefined || def == null) {
                return;
            }
            for (var obj in def) {
                if (typeof def[obj] === 'function') {
                    _properties[obj] = def[obj];
                }
            }
            return this;
        }
        
        var Public = {
            Method : Method,
            Property: Property,
            Typed:Typed
        };
        function Protected() {
            Method : function protectedMethod(){

            }
        }
        function Private() {

        }
    };
})(window);