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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs = require("bcryptjs");
const user_repository_1 = require("./user.repository");
const abstracts_1 = require("../../core/abstracts");
let UserService = class UserService extends abstracts_1.BaseService {
    constructor(_userRepository) {
        super();
        this._userRepository = _userRepository;
    }
    async excutingRequestCreate(user) {
        const isExisted = await this._userRepository.findByUsername(user.username);
        if (isExisted) {
            throw new common_1.BadRequestException('Username is existed.');
        }
        const response = await this._userRepository.create(user);
        return this.handleResponseJSON(response);
    }
    async excutingRequestDelete(_id) {
        const response = await this._userRepository.delete(_id);
        return this.handleResponseBoolean(response);
    }
    async excutingRequestFilter(filter) {
        const response = await this._userRepository.findOne(filter);
        return this.handleResponseJSON(response);
    }
    async excutingRequestRetrieve() {
        const response = await this._userRepository.find();
        if (!response) {
            return `No user available`;
        }
        return this.handleResponseJSON(response);
    }
    async excutingRequestUpdateCurrentUser(id, user) {
        const response = await this._userRepository.update(id, user);
        return this.handleResponseJSON(response);
    }
    async excutingRequestUpdateProfile(id, user) {
        const response = await this._userRepository.update(id, user);
        return this.handleResponseJSON(response);
    }
    async excutingRequestUpsert(_id, update) {
        const response = await this._userRepository.upsertOne({ _id }, update, true);
        return this.handleResponseJSON(response);
    }
    async excutingRequestFindById(_id) {
        const response = await this._userRepository.findById(_id);
        return this.handleResponseJSON(response);
    }
    async excutingRequestUpdateCurrentPassword(id, input) {
        const password = bcryptjs.hashSync(input.newPassword, 10);
        const response = await this._userRepository.update(id, {
            password,
        });
        return this.handleResponseBoolean(response);
    }
    async excutingRequestChangePassword(id, input) {
        const user = await this._userRepository.findById(input.userId);
        if (!user) {
            return false;
        }
        const password = bcryptjs.hashSync(input.newPassword, 10);
        const response = await this._userRepository.update(id, {
            password,
        });
        return this.handleResponseBoolean(response);
    }
    async excutingRequestFindByName(arg) {
        const name = new RegExp(arg, 'i');
        const response = await this._userRepository.findByName(name);
        return this.handleResponseJSON(response);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map