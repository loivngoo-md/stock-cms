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
exports.LoginRecordService = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../core/abstracts");
const login_record_repository_1 = require("./login-record.repository");
let LoginRecordService = class LoginRecordService extends abstracts_1.BaseService {
    constructor(_repo) {
        super();
        this._repo = _repo;
    }
    async insert(dto) {
        return await this._repo.create(dto);
    }
    async list() {
        return await this._repo.find();
    }
};
LoginRecordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [login_record_repository_1.LoginRecordRepo])
], LoginRecordService);
exports.LoginRecordService = LoginRecordService;
//# sourceMappingURL=login-record.service.js.map