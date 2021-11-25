"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_identifiers_1 = require("./inversify.identifiers");
var inversify_config_1 = require("./inversify.config");
function main() {
    var application = inversify_config_1.INVERSIFY_CONTAINER.get(inversify_identifiers_1.IDENTIFIERS.INVERSIFY_APP_ID);
    application.start(400);
}
main();
//# sourceMappingURL=index.js.map