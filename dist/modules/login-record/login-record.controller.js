"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRecordController = void 0;
const common_1 = require("@nestjs/common");
const login_record_service_1 = require("./login-record.service");
let LoginRecordController = class LoginRecordController {
    constructor(loginRecordService) {
        this.loginRecordService = loginRecordService;
    }
    async list() {
        return await this.loginRecordService.list();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoginRecordController.prototype, "list", null);
LoginRecordController = __decorate([
    (0, common_1.Controller)('login-record'),
    __metadata("design:paramtypes", [login_record_service_1.LoginRecordService])
], LoginRecordController);
exports.LoginRecordController = LoginRecordController;
//# sourceMappingURL=login-record.controller.js.map