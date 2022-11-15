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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const error_message_1 = require("./../../common/constant/error-message");
const constants_1 = require("./../../common/constant/constants");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const unProcessable_exception_1 = require("../../exceptions/unProcessable.exception");
const BackendLogger_1 = require("../logger/BackendLogger");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcryptjs");
const fetch = require("node-fetch");
const google_auth_library_1 = require("google-auth-library");
const not_found_exception_1 = require("../../exceptions/not-found.exception");
const login_record_service_1 = require("../login-record/login-record.service");
let AuthService = AuthService_1 = class AuthService {
    constructor(_userService, _jwtService, _loginRecord) {
        this._userService = _userService;
        this._jwtService = _jwtService;
        this._loginRecord = _loginRecord;
        this.logger = new BackendLogger_1.BackendLogger(AuthService_1.name);
    }
    async validateUser(payload) {
        const { username } = payload;
        const user = await this._userService.excutingRequestFilter({
            username: username,
        });
        if (!user) {
            throw new unProcessable_exception_1.UnprocessableException('Invalid token');
        }
        return payload;
    }
    async validateGoogleAccount(token) {
        try {
            const client = new google_auth_library_1.OAuth2Client(process.env.CLIENT_ID_GOOGLE);
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.CLIENT_ID_GOOGLE,
            });
            if (!ticket) {
                throw new common_1.ForbiddenException(`You don't have permission to access.`);
            }
            const { name, picture, email } = ticket.getPayload();
            if (!email.includes('.ncc@gmail.com')) {
                throw new unProcessable_exception_1.UnprocessableException(`Email is not valid, please use email is provided.`);
            }
            const update = {
                username: email.split('@')[0],
                firstName: name.split(' ')[0],
                lastName: name.split(' ')[1],
                picture,
                email,
            };
            const user = (await this._userService.excutingRequestUpsert(email, update));
            return await this.createToken(user);
        }
        catch (error) {
            throw error;
        }
    }
    async loginWithUsername(LoginByUsernameDto, ip) {
        const { username } = LoginByUsernameDto;
        const user = await this._userService.excutingRequestFilter({ username });
        if (!user || user instanceof not_found_exception_1.NotFound) {
            throw new not_found_exception_1.NotFound(error_message_1.INVALID_EMAIL);
        }
        if (!(await this.validatePassword(user, LoginByUsernameDto.password))) {
            throw new not_found_exception_1.NotFound(error_message_1.INVALID_PASSWORD);
        }
        var requestOptions = {
            method: 'GET',
        };
        const ipgeo = await fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=c93f71baa0ed44c09ba7ae01a7a76f5b&ip=${ip}`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
        const location = {
            username: user.username,
            password: '',
            ip: ip,
            location: ipgeo.city.name,
            time: new Date(),
        };
        console.log(location);
        await this._loginRecord.insert(location);
        this.logger.log(`username '${user.username}' is currently logged into the system`);
        return this.createToken(user);
    }
    async validatePassword(user, password) {
        return await bcrypt.compareSync(password, user.password);
    }
    async createToken(user) {
        const accessToken = this._jwtService.sign({
            role: user.role,
            username: user.username,
            id: user._id,
        });
        const response = {
            username: user.username,
            role: user.role,
            accessToken,
            expiresIn: constants_1.TOKEN_EXPIRES_IN,
        };
        return response;
    }
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        login_record_service_1.LoginRecordService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map