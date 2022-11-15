import * as winston from 'winston';
import { Logger } from '@nestjs/common';
export declare class BackendLogger extends Logger {
    static winstonLogger: winston.Logger;
    private ctx;
    constructor(context: string);
    silly(message: string): void;
    debug(message: string): void;
    log(message: string): void;
    warn(message: string): void;
    error(message: string, trace: string): void;
    winstonLog(message: string, level: 'silly' | 'verbose' | 'debug' | 'warn' | 'error', trace?: string): void;
}
