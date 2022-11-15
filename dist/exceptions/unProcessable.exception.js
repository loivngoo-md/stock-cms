"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableException = void 0;
const common_1 = require("@nestjs/common");
class UnprocessableException extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
exports.UnprocessableException = UnprocessableException;
//# sourceMappingURL=unProcessable.exception.js.map