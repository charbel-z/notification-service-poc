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
var ts_mockito_1 = require("ts-mockito");
var InversifyApplication_1 = require("../src/InversifyApplication");
var EvenCounter_1 = require("../src/guess/EvenCounter");
var EvenSecretMaker_1 = require("../src/secret/EvenSecretMaker");
describe("InversifyApplicationTest", function () {
    var Start = (function () {
        function Start() {
            this.mockedCounter = (0, ts_mockito_1.mock)(EvenCounter_1.EvenCounter);
            this.mockedSecretMaker = (0, ts_mockito_1.mock)(EvenSecretMaker_1.EvenSecretMaker);
            this.counter = (0, ts_mockito_1.instance)(this.mockedCounter);
            this.secretMaker = (0, ts_mockito_1.instance)(this.mockedSecretMaker);
            this.inversifyApplication = new InversifyApplication_1.InversifyApplication(this.counter, this.secretMaker);
        }
        Start.prototype.before = function () {
            (0, ts_mockito_1.resetCalls)(this.mockedCounter);
            (0, ts_mockito_1.resetCalls)(this.mockedSecretMaker);
        };
        Start.prototype.should_guess_right_after_two_guesses = function () {
            (0, ts_mockito_1.when)(this.mockedSecretMaker.generateSecret()).thenReturn(4);
            (0, ts_mockito_1.when)(this.mockedCounter.next()).thenReturn(2, 4);
            this.inversifyApplication.start(400);
            (0, ts_mockito_1.verify)(this.mockedSecretMaker.generateSecret()).once();
            (0, ts_mockito_1.verify)(this.mockedCounter.next()).times(2);
        };
        Start.prototype.should_guess_right_after_five_guesses = function () {
            (0, ts_mockito_1.when)(this.mockedSecretMaker.generateSecret()).thenReturn(10);
            (0, ts_mockito_1.when)(this.mockedCounter.next()).thenReturn(2, 4, 6, 8, 10);
            this.inversifyApplication.start(400);
            (0, ts_mockito_1.verify)(this.mockedSecretMaker.generateSecret()).once();
            (0, ts_mockito_1.verify)(this.mockedCounter.next()).times(5);
        };
        Start.prototype.should_exit_after_max_guesses_reached = function () {
            (0, ts_mockito_1.when)(this.mockedSecretMaker.generateSecret()).thenReturn(10);
            (0, ts_mockito_1.when)(this.mockedCounter.next()).thenReturn(2, 4, 6, 8, 10);
            this.inversifyApplication.start(2);
            (0, ts_mockito_1.verify)(this.mockedSecretMaker.generateSecret()).once();
            (0, ts_mockito_1.verify)(this.mockedCounter.next()).times(2);
        };
        __decorate([
            jest_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], Start.prototype, "should_guess_right_after_two_guesses", null);
        __decorate([
            jest_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], Start.prototype, "should_guess_right_after_five_guesses", null);
        __decorate([
            jest_1.test,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], Start.prototype, "should_exit_after_max_guesses_reached", null);
        Start = __decorate([
            jest_1.suite
        ], Start);
        return Start;
    }());
});
//# sourceMappingURL=InversifyApplicationTest.js.map