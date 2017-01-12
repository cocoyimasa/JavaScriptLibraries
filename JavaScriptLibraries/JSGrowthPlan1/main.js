//Linq to JavaScript 2016.12.16
(function () {
    var $ = window;
    //Interface IEnumerable
    function IEnumerable() {
        this.sourceArray = [];
    }
    IEnumerable.prototype.Range = function (start, end, step) {
        var arr = [];
        for (var x = start; x < end; x = x + step) {
            arr.push(x);
        }
        this.sourceArray = arr.slice(0);
        return this;
    };
    IEnumerable.prototype.From = function (srcArray) {
        this.sourceArray = srcArray.slice(0);
        return this;
    };
    IEnumerable.prototype.Where = function (FilterFunc) {
        var arr = [];
        for (var x in this.sourceArray) {
            if (FilterFunc(this.sourceArray[x])) {
                arr.push(this.sourceArray[x]);
            }
        }
        x = null;
        this.sourceArray = arr.slice(0);
        return this;
    };
    IEnumerable.prototype.Select = function (EveryFunc) {
        var arr = [];
        for (var x in this.sourceArray) {
            arr.push(EveryFunc(this.sourceArray[x]));
        }
        this.sourceArray = arr.slice(0);
        return this;
    };
    IEnumerable.prototype.ToArray = function(){
        return this.sourceArray.slice(0);
    }
    //Instance for IEnumerable
    var Enumerable = new IEnumerable();
    $.Linq = Enumerable;
    //test case
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr = Enumerable.From(arr).Select(function (x) { return x * 2;}).ToArray();
    console.log(arr);
}
)(window);