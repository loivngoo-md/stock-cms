import { ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
export declare class ExceptionLoggerFilter extends BaseExceptionFilter {
    private readonly logger;
    catch(exception: HttpException | Error, host: ArgumentsHost): any;
}
