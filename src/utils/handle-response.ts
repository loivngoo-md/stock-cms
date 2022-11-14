import {
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
} from '../common/constant/error-message';
type T = any;

function handleResponseJSONOrNotFound(
  response: T,
): Promise<T | NotFoundException> {
  switch (response) {
    case response:
      return response;
    default:
      throw new NotFoundException(NOT_FOUND);
  }
}

function handleResponseJSONOrInternal(
  response: T,
): Promise<T | InternalServerErrorException> {
  switch (response) {
    case response:
      return response;
    default:
      throw new InternalServerErrorException(INTERNAL_SERVER_ERROR);
  }
}

function handleResponseJSONOrForbidden(response) {
  switch (response) {
    case response:
      return response;
    default:
      throw new ForbiddenException(FORBIDDEN);
  }
}

export default {
  handleResponseJSONOrForbidden,
  handleResponseJSONOrInternal,
  handleResponseJSONOrNotFound,
};
