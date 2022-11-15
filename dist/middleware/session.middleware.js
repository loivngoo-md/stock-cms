"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SessionMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMiddleware = void 0;
const constants_1 = require("./../common/constant/constants");
const common_1 = require("@nestjs/common");
const cls = require("cls-hooked");
const uniqid_1 = require("uniqid");
let SessionMiddleware = SessionMiddleware_1 = class SessionMiddleware {
    static createDefault() {
        return (cls.getNamespace(constants_1.EMM_NAMESPACE) || cls.createNamespace(constants_1.EMM_NAMESPACE));
    }
    static get(key) {
        const session = cls.getNamespace(constants_1.EMM_NAMESPACE);
        if (!session) {
            return null;
        }
        return session.get(key);
    }
    static set(key, value) {
        const session = cls.getNamespace(constants_1.EMM_NAMESPACE);
        if (!session) {
            return null;
        }
        session.set(key, value);
    }
    use(req, res, next) {
        const session = SessionMiddleware_1.createDefault();
        session.run(async () => {
            SessionMiddleware_1.set(constants_1.REQUEST_ID, (0, uniqid_1.default)());
            next();
        });
    }
};
SessionMiddleware = SessionMiddleware_1 = __decorate([
    (0, common_1.Injectable)()
], SessionMiddleware);
exports.SessionMiddleware = SessionMiddleware;
//# sourceMappingURL=session.middleware.js.map