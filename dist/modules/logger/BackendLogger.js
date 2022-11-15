"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendLogger = void 0;
const dayjs = require("dayjs");
const winston = require("winston");
const chalk = require("chalk");
const common_1 = require("@nestjs/common");
const session_middleware_1 = require("../../middleware/session.middleware");
const constants_1 = require("../../common/constant/constants");
const formatter = (info) => {
    const requestId = session_middleware_1.SessionMiddleware.get(constants_1.REQUEST_ID) || '-';
    const user = session_middleware_1.SessionMiddleware.get(constants_1.SESSION_USER);
    const email = user ? user.username : '-';
    return `${dayjs(info.timestamp).format('YYYY/MM/DD - hh:mm:ss.SSS A')} ${chalk.magentaBright(requestId)} ${email} [${info.level}] [${chalk.green(info.context)}] ${info.message}`;
};
const customFormat = winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.prettyPrint(), winston.format.printf((info) => formatter(info)));
class BackendLogger extends common_1.Logger {
    constructor(context) {
        super(context);
        this.ctx = context;
    }
    silly(message) {
        this.winstonLog(message, 'silly');
        super.log(message);
    }
    debug(message) {
        this.winstonLog(message, 'debug');
        super.log(message);
    }
    log(message) {
        this.winstonLog(message, 'verbose');
        super.log(message);
    }
    warn(message) {
        this.winstonLog(message, 'warn');
        super.warn(message);
    }
    error(message, trace) {
        this.winstonLog(message, 'error', trace);
        super.error(message, trace);
    }
    winstonLog(message, level, trace) {
        BackendLogger.winstonLogger.log({
            level,
            message,
            trace,
            context: this.ctx,
        });
    }
}
exports.BackendLogger = BackendLogger;
BackendLogger.winstonLogger = winston.createLogger({
    level: 'silly',
    format: customFormat,
    transports: [
        new winston.transports.File({
            filename: 'logs/server.tail.log',
            tailable: true,
            level: 'verbose',
            maxFiles: 10,
            maxsize: 5 * 1024 * 1024,
        }),
        new winston.transports.File({
            filename: 'logs/serverAll.tail.log',
            tailable: true,
            level: 'silly',
            maxFiles: 5,
            maxsize: 5 * 1024 * 1024,
        }),
        new winston.transports.File({
            filename: 'logs/server.log',
            format: winston.format.combine(winston.format.uncolorize()),
            tailable: false,
            level: 'verbose',
            maxFiles: 30,
            maxsize: 5 * 1024 * 1024,
        }),
        new winston.transports.File({
            filename: 'logs/serverAll.log',
            format: winston.format.combine(winston.format.uncolorize()),
            tailable: false,
            level: 'silly',
            maxFiles: 30,
            maxsize: 5 * 1024 * 1024,
        }),
    ],
});
//# sourceMappingURL=BackendLogger.js.map