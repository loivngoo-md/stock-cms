"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = void 0;
const common_1 = require("@nestjs/common");
class AuthorizationError extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.AuthorizationError = AuthorizationError;
//# sourceMappingURL=unAuthorization.exception.js.map