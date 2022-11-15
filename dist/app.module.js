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
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_module_1 = require("./core/core.module");
const user_module_1 = require("./modules/user/user.module");
const auth_module_1 = require("./modules/auth/auth.module");
const role_module_1 = require("./modules/role/role.module");
const login_record_module_1 = require("./modules/login-record/login-record.module");
let AppModule = AppModule_1 = class AppModule {
    constructor() {
        AppModule_1.port = process.env.PORT;
        AppModule_1.host = process.env.HOST;
        AppModule_1.isDev = process.env.NODE_ENV === 'development';
    }
};
AppModule = AppModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            core_module_1.CoreModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            login_record_module_1.LoginRecordModule,
        ],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map