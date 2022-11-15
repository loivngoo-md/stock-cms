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
exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const bcryptjs = require("bcryptjs");
const enums_1 = require("../../common/enums");
const base_model_1 = require("../../core/abstracts/base.model");
let User = class User extends base_model_1.BaseModel {
};
__decorate([
    (0, typegoose_1.prop)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: enums_1.Role.NORMAL }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "avatarCode", void 0);
User = __decorate([
    (0, typegoose_1.pre)('save', function (next) {
        if (!this.isModified('password')) {
            return next();
        }
        this.password = bcryptjs.hashSync(this.password, 10);
        next();
    })
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map