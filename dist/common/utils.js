"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMissingError = exports.checkValidMongoId = exports.handleNotFound = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const error_message_1 = require("./constant/error-message");
function handleNotFound(entityName) {
    throw new common_1.BadRequestException(`The ${entityName} is not exist`);
}
exports.handleNotFound = handleNotFound;
function checkValidMongoId(_id) {
    if (!(0, mongoose_1.isValidObjectId)(_id)) {
        throw new common_1.BadRequestException(error_message_1.INVALID_ID);
    }
}
exports.checkValidMongoId = checkValidMongoId;
function handleMissingError() {
    throw new common_1.BadRequestException(error_message_1.MISSING_PARAMS);
}
exports.handleMissingError = handleMissingError;
//# sourceMappingURL=utils.js.map