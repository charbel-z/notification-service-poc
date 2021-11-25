"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = (function () {
    function Person() {
        this.firstName = "";
        this.lastName = "";
        this.age = 0;
        this.phone = "";
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (value) {
        this.firstName = value;
        return this;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (value) {
        this.lastName = value;
        return this;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (value) {
        this.age = value;
        return this;
    };
    Person.prototype.getPhone = function () {
        return this.phone;
    };
    Person.prototype.setPhone = function (value) {
        this.phone = value;
        return this;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map