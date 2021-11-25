"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = void 0;
var NumberUtils = (function () {
    function NumberUtils() {
    }
    NumberUtils.isEven = function (number) {
        return number % 2 == 0;
    };
    NumberUtils.isOdd = function (number) {
        return !this.isEven(number);
    };
    return NumberUtils;
}());
exports.NumberUtils = NumberUtils;
//# sourceMappingURL=NumberUtils.js.map