"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const error_message_1 = require("../common/constant/error-message");
function handleResponseJSONOrNotFound(response) {
    switch (response) {
        case response:
            return response;
        default:
            throw new common_1.NotFoundException(error_message_1.NOT_FOUND);
    }
}
function handleResponseJSONOrInternal(response) {
    switch (response) {
        case response:
            return response;
        default:
            throw new common_1.InternalServerErrorException(error_message_1.INTERNAL_SERVER_ERROR);
    }
}
function handleResponseJSONOrForbidden(response) {
    switch (response) {
        case response:
            return response;
        default:
            throw new common_1.ForbiddenException(error_message_1.FORBIDDEN);
    }
}
exports.default = {
    handleResponseJSONOrForbidden,
    handleResponseJSONOrInternal,
    handleResponseJSONOrNotFound,
};
//# sourceMappingURL=handle-response.js.map