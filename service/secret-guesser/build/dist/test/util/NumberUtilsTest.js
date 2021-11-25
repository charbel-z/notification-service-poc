"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jest_1 = require("@testdeck/jest");
var NumberUtils_1 = require("../../src/util/NumberUtils");
describe("NumberUtilsTest", function () {
    var IsEven = (function () {
        function IsEven() {
        }
        IsEven.prototype.should_return_true_on_even_number = function () {
            var input = 2;
            var actualResult = NumberUtils_1.NumberUtils.isEven(input);
            expect(actualResult).toBeTruthy();
        };
        IsEven.prototype.should_return_false_on_odd_number = function () {
            var input = 5;
            var actualResult = NumberUtils_1.NumberUtils.isEven(input);
            expect(actualResult).toBeFalsy();
        };
        __decorate([
            jest_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], IsEven.prototype, "should_return_true_on_even_number", null);
        __decorate([
            jest_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], IsEven.prototype, "should_return_false_on_odd_number", null);
        IsEven = __decorate([
            jest_1.suite
        ], IsEven);
        return IsEven;
    }());
    var IsOdd = (function () {
        function IsOdd() {
        }
        IsOdd.prototype.should_return_true_on_odd_number = function () {
            var input = 1;
            var actualResult = NumberUtils_1.NumberUtils.isOdd(input);
            expect(actualResult).toBeTruthy();
        };
        IsOdd.prototype.should_return_false_on_even_number = function () {
            var input = 2;
            var actualResult = NumberUtils_1.NumberUtils.isOdd(input);
            expect(actualResult).toBeFalsy();
        };
        __decorate([
            jest_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], IsOdd.prototype, "should_return_true_on_odd_number", null);
        __decorate([
            jest_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], IsOdd.prototype, "should_return_false_on_even_number", null);
        IsOdd = __decorate([
            jest_1.suite
        ], IsOdd);
        return IsOdd;
    }());
});
//# sourceMappingURL=NumberUtilsTest.js.map