"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const BackendLogger_1 = require("../../modules/logger/BackendLogger");
class BaseController {
    constructor(name) {
        this._logger = new BackendLogger_1.BackendLogger(name);
    }
    logRequest(employee, action) {
        this._logger.log(`Logging: Permission[${employee.role}], username[${employee.username}] is executing ${action} Request`);
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controler.js.map