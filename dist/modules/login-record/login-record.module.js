"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRecordModule = void 0;
const common_1 = require("@nestjs/common");
const login_record_service_1 = require("./login-record.service");
const login_record_controller_1 = require("./login-record.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const login_record_model_1 = require("./login-record.model");
const login_record_repository_1 = require("./login-record.repository");
let LoginRecordModule = class LoginRecordModule {
};
LoginRecordModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([login_record_model_1.LoginRecord])],
        controllers: [login_record_controller_1.LoginRecordController],
        providers: [login_record_service_1.LoginRecordService, login_record_repository_1.LoginRecordRepo],
        exports: [login_record_service_1.LoginRecordService, login_record_repository_1.LoginRecordRepo]
    })
], LoginRecordModule);
exports.LoginRecordModule = LoginRecordModule;
//# sourceMappingURL=login-record.module.js.map