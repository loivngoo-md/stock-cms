"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ExceptionLoggerFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionLoggerFilter = void 0;
const error_message_1 = require("./../common/constant/error-message");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const BackendLogger_1 = require("../modules/logger/BackendLogger");
let ExceptionLoggerFilter = ExceptionLoggerFilter_1 = class ExceptionLoggerFilter extends core_1.BaseExceptionFilter {
    constructor() {
        super(...arguments);
        this.logger = new BackendLogger_1.BackendLogger(ExceptionLoggerFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();
        if (exception instanceof common_1.HttpException) {
            const errRes = exception.getResponse();
            const status = exception.getStatus();
            this.logger.error(typeof errRes === 'object' ? JSON.stringify(errRes) : exception.message, exception.stack);
            return res.status(status).json(typeof errRes === 'object'
                ? errRes
                : {
                    statusCode: exception.getStatus(),
                    message: exception.message,
                });
        }
        this.logger.error(exception.message, exception.stack);
        return res.status(500).json({
            statusCode: 500,
            message: error_message_1.INTERNAL_SERVER_ERROR,
        });
    }
};
ExceptionLoggerFilter = ExceptionLoggerFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException, Error)
], ExceptionLoggerFilter);
exports.ExceptionLoggerFilter = ExceptionLoggerFilter;
//# sourceMappingURL=exception.filter.js.map