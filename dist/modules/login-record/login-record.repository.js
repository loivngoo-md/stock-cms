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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRecordRepo = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const base_repository_1 = require("../../core/abstracts/base.repository");
const login_record_model_1 = require("./login-record.model");
let LoginRecordRepo = class LoginRecordRepo extends base_repository_1.BaseRepository {
    constructor(_loginRecordModel) {
        super(_loginRecordModel);
        this._loginRecordModel = _loginRecordModel;
    }
};
LoginRecordRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(login_record_model_1.LoginRecord)),
    __metadata("design:paramtypes", [Object])
], LoginRecordRepo);
exports.LoginRecordRepo = LoginRecordRepo;
//# sourceMappingURL=login-record.repository.js.map