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
exports.AuthController = void 0;
const error_message_1 = require("./../../common/constant/error-message");
const common_1 = require("@nestjs/common");
const unProcessable_exception_1 = require("../../exceptions/unProcessable.exception");
const auth_service_1 = require("./auth.service");
const LoginByUsernameDto_1 = require("./dto/LoginByUsernameDto");
const swagger_1 = require("@nestjs/swagger");
const LoginReturnDto_1 = require("./dto/LoginReturnDto");
const swagger_constant_1 = require("../../common/constant/swagger.constant");
const router_constant_1 = require("../../common/constant/router.constant");
const not_found_exception_1 = require("../../exceptions/not-found.exception");
const nestjs_real_ip_1 = require("nestjs-real-ip");
const user_service_1 = require("../user/user.service");
const create_user_dto_1 = require("../user/dto/create-user.dto");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async signup(input) {
        return this.userService.excutingRequestCreate(input);
    }
    async login(input, ip) {
        try {
            return this.authService.loginWithUsername(input, ip);
        }
        catch (error) {
            throw error;
        }
    }
    async validateToken(req) {
        try {
            if (!req.token) {
                throw new unProcessable_exception_1.UnprocessableException(error_message_1.INVALID_TOKEN);
            }
            return await this.authService.validateGoogleAccount(req.token);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: LoginReturnDto_1.LoginReturnDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        type: not_found_exception_1.NotFound,
    }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, nestjs_real_ip_1.RealIP)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginByUsernameDto_1.LoginByUsernameDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: LoginReturnDto_1.LoginReturnDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        type: common_1.HttpException,
        status: common_1.HttpStatus.NOT_FOUND | common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }),
    (0, common_1.Post)('TokenGoogle'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateToken", null);
AuthController = __decorate([
    (0, swagger_1.ApiBearerAuth)(swagger_constant_1.Tag.Token),
    (0, swagger_1.ApiTags)(swagger_constant_1.Tag.Auth),
    (0, common_1.Controller)(router_constant_1.default.Auth),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map