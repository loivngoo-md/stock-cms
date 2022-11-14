import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthorizationError extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
