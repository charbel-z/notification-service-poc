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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InversifyApplication = void 0;
var inversify_1 = require("inversify");
require("reflect-metadata");
var inversify_identifiers_1 = require("./inversify.identifiers");
var InversifyApplication = (function () {
    function InversifyApplication(counter, secretMaker) {
        this.counter = counter;
        this.secretMaker = secretMaker;
    }
    InversifyApplication.prototype.start = function (maxGuesses) {
        console.log("Inversify Application Starting...");
        var secret = this.secretMaker.generateSecret();
        console.log("The Secret is: " + secret);
        console.log(".");
        console.log("The Guesser is trying to find secret...");
        var guess = -1;
        var count = 0;
        while (guess != secret) {
            if (count >= maxGuesses) {
                console.log("MAX Guesses reached!!!");
                return;
            }
            count++;
            guess = this.counter.next();
            console.log("Guessing: " + guess);
        }
        console.log("FOUND! Secret is " + guess);
    };
    InversifyApplication = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(inversify_identifiers_1.IDENTIFIERS.EVEN_COUNTER_ID)),
        __param(1, (0, inversify_1.inject)(inversify_identifiers_1.IDENTIFIERS.EVEN_SECRET_MAKER_ID)),
        __metadata("design:paramtypes", [Object, Object])
    ], InversifyApplication);
    return InversifyApplication;
}());
exports.InversifyApplication = InversifyApplication;
//# sourceMappingURL=InversifyApplication.js.map