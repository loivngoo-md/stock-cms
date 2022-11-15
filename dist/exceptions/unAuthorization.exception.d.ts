import { HttpException } from '@nestjs/common';
export declare class AuthorizationError extends HttpException {
    constructor(message: string);
}
