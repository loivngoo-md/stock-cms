"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = void 0;
const common_1 = require("@nestjs/common");
class AuthenticationError extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.AuthenticationError = AuthenticationError;
//# sourceMappingURL=unAuthentication.exception.js.map