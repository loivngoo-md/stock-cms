"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const nest_morgan_1 = require("nest-morgan");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            database_module_1.DatabaseModule,
            nest_morgan_1.MorganModule,
            platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './public/uploads',
                }),
            }),
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: (0, nest_morgan_1.MorganInterceptor)('combined'),
            },
        ],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map