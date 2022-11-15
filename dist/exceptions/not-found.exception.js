"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const common_1 = require("@nestjs/common");
class NotFound extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NotFound = NotFound;
//# sourceMappingURL=not-found.exception.js.map