import { HttpException } from '@nestjs/common';
export declare class NotFound extends HttpException {
    constructor(message: string);
}
