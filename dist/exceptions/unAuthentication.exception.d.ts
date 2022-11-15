import { HttpException } from '@nestjs/common';
export declare class AuthenticationError extends HttpException {
    constructor(message: string);
}
