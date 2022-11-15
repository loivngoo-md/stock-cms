import { HttpException } from '@nestjs/common';
export declare class UnprocessableException extends HttpException {
    constructor(message: string);
}
