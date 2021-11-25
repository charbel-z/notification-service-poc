"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = void 0;
var Receipt = (function () {
    function Receipt() {
    }
    Receipt.prototype.getFirstName = function () {
        return this.firstName;
    };
    Receipt.prototype.setFirstName = function (value) {
        this.firstName = value;
    };
    Receipt.prototype.getLastName = function () {
        return this.lastName;
    };
    Receipt.prototype.setLastName = function (value) {
        this.lastName = value;
    };
    Receipt.prototype.getAge = function () {
        return this.age;
    };
    Receipt.prototype.setAge = function (value) {
        this.age = value;
    };
    Receipt.prototype.getPhone = function () {
        return this.phone;
    };
    Receipt.prototype.setPhone = function (value) {
        this.phone = value;
    };
    Receipt.PersonBuilder = (function () {
        function class_1() {
            this.person = new Receipt();
        }
        return class_1;
    }());
    return Receipt;
}());
exports.Receipt = Receipt;
//# sourceMappingURL=Receipt.js.map