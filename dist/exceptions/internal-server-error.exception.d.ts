import { HttpException } from '@nestjs/common';
export declare class InternalServerError extends HttpException {
    constructor(message: string);
}
