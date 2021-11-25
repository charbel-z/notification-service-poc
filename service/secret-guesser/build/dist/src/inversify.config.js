"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVERSIFY_CONTAINER = void 0;
var inversify_1 = require("inversify");
var EvenCounter_1 = require("./guess/EvenCounter");
var inversify_identifiers_1 = require("./inversify.identifiers");
var InversifyApplication_1 = require("./InversifyApplication");
var EvenSecretMaker_1 = require("./secret/EvenSecretMaker");
var INVERSIFY_CONTAINER = new inversify_1.Container();
exports.INVERSIFY_CONTAINER = INVERSIFY_CONTAINER;
INVERSIFY_CONTAINER.bind(inversify_identifiers_1.IDENTIFIERS.INVERSIFY_APP_ID).to(InversifyApplication_1.InversifyApplication);
INVERSIFY_CONTAINER.bind(inversify_identifiers_1.IDENTIFIERS.EVEN_COUNTER_ID).toConstantValue(new EvenCounter_1.EvenCounter(2));
INVERSIFY_CONTAINER.bind(inversify_identifiers_1.IDENTIFIERS.EVEN_SECRET_MAKER_ID).toConstantValue(new EvenSecretMaker_1.EvenSecretMaker(2, 300));
//# sourceMappingURL=inversify.config.js.map