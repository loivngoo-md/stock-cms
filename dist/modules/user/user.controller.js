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
exports.UserController = void 0;
const transform_interceptor_1 = require("./../../common/inceptor/transform.interceptor");
const common_1 = require("@nestjs/common");
const enums_1 = require("../../common/enums");
const role_decorator_1 = require("../role/role.decorator");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_service_1 = require("./user.service");
const utils_1 = require("../../common/utils");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const platform_express_1 = require("@nestjs/platform-express");
const uploads_1 = require("../../core/uploads");
const user_decorator_1 = require("./user.decorator");
const user_return_dto_1 = require("./dto/user-return.dto");
const swagger_1 = require("@nestjs/swagger");
const swagger_constant_1 = require("../../common/constant/swagger.constant");
const update_own_password_dto_1 = require("./dto/update-own-password.dto");
const abstracts_1 = require("../../core/abstracts");
const enums_2 = require("../common/enums");
const PayLoad_1 = require("../auth/dto/PayLoad");
let UserController = class UserController extends abstracts_1.BaseController {
    constructor(_userService) {
        super(`UserController`);
        this._userService = _userService;
    }
    async getProfile(employee) {
        this.logRequest(employee, enums_2.Action.Get);
        return await this._userService.excutingRequestFindById(employee.id);
    }
    async uploadOwnAvatar(file, employee) {
        try {
            const _id = employee.userId;
            const update = { avatarCode: file.filename };
            this.logRequest(employee, enums_2.Action.Upload);
            return await this._userService.excutingRequestUpdateCurrentUser(_id, update);
        }
        catch (error) {
            throw error;
        }
    }
    async uploadAvatar(file, id) {
        try {
            const update = { avatarCode: file.filename };
            return await this._userService.excutingRequestUpsert(id, update);
        }
        catch (error) {
            throw error;
        }
    }
    async filterUserByName(name) {
        try {
            return await this._userService.excutingRequestFindByName(name);
        }
        catch (error) {
            throw error;
        }
    }
    async GetCurrentEmployee(id) {
        return await this._userService.excutingRequestFindById(id);
    }
    async getAll(employee) {
        this.logRequest(employee, enums_2.Action.Retrieve);
        return await this._userService.excutingRequestRetrieve();
    }
    async handleRequestCreateNewUser(item) {
        return await await this._userService.excutingRequestCreate(item);
    }
    async handleRequestUpdateCurrentUser(id, item, employee) {
        try {
            this.logRequest(employee, enums_2.Action.Update);
            return await this._userService.excutingRequestUpdateCurrentUser(id, item);
        }
        catch (error) {
            throw error;
        }
    }
    async updateOwnProfile(id, item) {
        try {
            return await this._userService.excutingRequestUpsert(id, item);
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            (0, utils_1.checkValidMongoId)(id);
            return await this._userService.excutingRequestDelete(id);
        }
        catch (error) {
            throw error;
        }
    }
    async updateOwnPassword(user, input) {
        try {
            return await this._userService.excutingRequestUpdateCurrentPassword(user.userId, input);
        }
        catch (error) {
            throw error;
        }
    }
    async resetPassword(input) {
        try {
            return await this._userService.excutingRequestChangePassword(input.userId, input);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: user_return_dto_1.UserDto,
    }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(...Object.values(enums_1.Role)),
    (0, common_1.Get)('profile'),
    __param(0, (0, user_decorator_1.GetCurrentEmployee)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PayLoad_1.PayLoad]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)(),
    (0, role_decorator_1.hasRoles)(...Object.values(enums_1.Role)),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', uploads_1.storage)),
    (0, common_1.Post)('upload-own-avatar'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, user_decorator_1.GetCurrentEmployee)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadOwnAvatar", null);
__decorate([
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)(),
    (0, role_decorator_1.hasRoles)(enums_1.Role.ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', uploads_1.storage)),
    (0, common_1.Post)('upload-avatar/:id'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadAvatar", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: [user_return_dto_1.UserDto] }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(...Object.values(enums_1.Role)),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "filterUserByName", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: user_return_dto_1.UserDto }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(...Object.values(enums_1.Role)),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "GetCurrentEmployee", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: [user_return_dto_1.UserDto] }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(enums_1.Role.ADMIN, enums_1.Role.PM),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.GetCurrentEmployee)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PayLoad_1.PayLoad]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: user_return_dto_1.UserDto }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, common_1.Post)('/insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "handleRequestCreateNewUser", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: user_return_dto_1.UserDto }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(enums_1.Role.ADMIN, enums_1.Role.PM),
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.GetCurrentEmployee)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto,
        PayLoad_1.PayLoad]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "handleRequestUpdateCurrentUser", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: update_user_dto_1.UpdateOwnProfileDto }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(...Object.values(enums_1.Role)),
    (0, common_1.Patch)('/update-own-profile/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateOwnProfileDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateOwnProfile", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Boolean }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(enums_1.Role.ADMIN, enums_1.Role.PM),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: update_own_password_dto_1.UpdateOwnPassword }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(...Object.values(enums_1.Role)),
    (0, common_1.Post)('/update-own-password'),
    __param(0, (0, user_decorator_1.GetCurrentEmployee)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_own_password_dto_1.UpdateOwnPassword]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateOwnPassword", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: reset_password_dto_1.resetPasswordDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiForbiddenResponse)(),
    (0, role_decorator_1.hasRoles)(enums_1.Role.ADMIN, enums_1.Role.PM),
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.resetPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
UserController = __decorate([
    (0, swagger_1.ApiBearerAuth)(swagger_constant_1.Tag.Token),
    (0, swagger_1.ApiTags)(swagger_constant_1.Tag.User),
    (0, common_1.Controller)('users'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.UserInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map