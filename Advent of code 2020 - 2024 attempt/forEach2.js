var A = /** @class */ (function () {
    function A(par, par2) {
        var _this = this;
        this.logSomething = function () {
            console.log(_this.something);
        };
        console.log("hello");
        this.something = par + par2;
    }
    return A;
}());
var a = new A(1, 2);
a.logSomething();
var logSomething = function (something) {
    console.log(something.something);
};
logSomething(a);
// @ts-ignore
Array.prototype.forEach2 = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];
        callback(element, i, this);
    }
};
var b = ['haha', 'poop', 'brap', 'brap'];
b.forEach(console.log);
// @ts-ignore
b.forEach2(console.log);
var value1 = b.reduce(function (previousValue, currentValue) {
    var _a;
    previousValue[currentValue] = ((_a = previousValue[currentValue]) !== null && _a !== void 0 ? _a : 0) + 1;
    return previousValue;
}, {});
console.log(value1);
