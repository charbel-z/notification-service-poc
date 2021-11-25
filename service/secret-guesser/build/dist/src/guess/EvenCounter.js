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
exports.EvenCounter = void 0;
var NumberUtils_1 = require("../util/NumberUtils");
var inversify_1 = require("inversify");
require("reflect-metadata");
var EvenCounter = (function () {
    function EvenCounter(seed) {
        this.seed = Math.floor(seed);
        this.count = NumberUtils_1.NumberUtils.isEven(seed) ? seed : seed + 1;
    }
    EvenCounter.prototype.getCount = function () {
        return this.count;
    };
    EvenCounter.prototype.getSeed = function () {
        return this.seed;
    };
    EvenCounter.prototype.next = function () {
        var next = this.count;
        this.count += 2;
        return next;
    };
    EvenCounter = __decorate([
        (0, inversify_1.injectable)(),
        __metadata("design:paramtypes", [Number])
    ], EvenCounter);
    return EvenCounter;
}());
exports.EvenCounter = EvenCounter;
//# sourceMappingURL=EvenCounter.js.map