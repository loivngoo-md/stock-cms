import { BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { MISSING_PARAMS, INVALID_ID } from './constant/error-message';

export function handleNotFound(entityName: string) {
  throw new BadRequestException(`The ${entityName} is not exist`);
}

export function checkValidMongoId(_id) {
  if (!isValidObjectId(_id)) {
    throw new BadRequestException(INVALID_ID);
  }
}
export function handleMissingError() {
  throw new BadRequestException(MISSING_PARAMS);
}
