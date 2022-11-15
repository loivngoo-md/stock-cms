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
exports.BaseModel = void 0;
const swagger_1 = require("@nestjs/swagger");
const typegoose_1 = require("@typegoose/typegoose");
const typegoose_2 = require("typegoose");
let BaseModel = class BaseModel extends typegoose_2.Typegoose {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typegoose_1.prop)({ auto: true }),
    __metadata("design:type", typegoose_1.mongoose.Types.ObjectId)
], BaseModel.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], BaseModel.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], BaseModel.prototype, "updatedAt", void 0);
BaseModel = __decorate([
    (0, typegoose_1.modelOptions)({
        options: { allowMixed: typegoose_1.Severity.ALLOW },
        schemaOptions: {
            timestamps: true,
            toJSON: {},
        },
    })
], BaseModel);
exports.BaseModel = BaseModel;
//# sourceMappingURL=base.model.js.map