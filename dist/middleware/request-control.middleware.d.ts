import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { BackendLogger } from '../modules/logger/BackendLogger';
export declare class LoggerMiddleware implements NestMiddleware {
    private readonly logger;
    constructor(logger: BackendLogger);
    use(req: Request, res: Response, next: NextFunction): void;
}
