import { INTERNAL_SERVER_ERROR } from './../common/constant/error-message';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { BackendLogger } from '../modules/logger/BackendLogger';

@Catch(HttpException, Error)
export class ExceptionLoggerFilter extends BaseExceptionFilter {
  private readonly logger = new BackendLogger(ExceptionLoggerFilter.name);

  catch(exception: HttpException | Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();
    if (exception instanceof HttpException) {
      const errRes = exception.getResponse();
      const status = exception.getStatus();
      this.logger.error(
        typeof errRes === 'object' ? JSON.stringify(errRes) : exception.message,
        exception.stack,
      );

      return res.status(status).json(
        typeof errRes === 'object'
          ? errRes
          : {
              statusCode: exception.getStatus(),
              message: exception.message,
            },
      );
    }

    this.logger.error(exception.message, exception.stack);
    return res.status(500).json({
      statusCode: 500,
      message: INTERNAL_SERVER_ERROR,
    });
  }
}
