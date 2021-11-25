"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = (function () {
    function Customer() {
        this.firstName = "";
        this.lastName = "";
        this.age = 0;
        this.phone = "";
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (value) {
        this.firstName = value;
        return this;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (value) {
        this.lastName = value;
        return this;
    };
    Customer.prototype.getAge = function () {
        return this.age;
    };
    Customer.prototype.setAge = function (value) {
        this.age = value;
        return this;
    };
    Customer.prototype.getPhone = function () {
        return this.phone;
    };
    Customer.prototype.setPhone = function (value) {
        this.phone = value;
        return this;
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map