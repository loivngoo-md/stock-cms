"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const error_message_1 = require("../../common/constant/error-message");
class BaseService {
    constructor() {
        this.handleResponseBoolean = (response) => {
            if (Object.values(response)) {
                return true;
            }
            throw new common_1.ForbiddenException(error_message_1.FORBIDDEN);
        };
        this.handleResponseJSON = (response) => {
            if (![...Object.values(response)]) {
                throw new common_1.ForbiddenException(error_message_1.FORBIDDEN);
            }
            return response;
        };
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map