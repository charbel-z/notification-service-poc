"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
require("reflect-metadata");
var Customer_1 = require("./Customer");
var CustomerService = (function () {
    function CustomerService() {
    }
    CustomerService.prototype.createDefaultCustomer = function () {
        return new Customer_1.Customer()
            .setFirstName("John")
            .setLastName("Smith")
            .setAge(37)
            .setPhone("+61403928837");
    };
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=CustomerService.js.map