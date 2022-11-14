import { ForbiddenException } from '@nestjs/common';
import { FORBIDDEN } from '../../common/constant/error-message';

export interface IService {
  handleResponseJSON: Function;
}

export class BaseService implements IService {
  handleResponseBoolean = (response): boolean => {
    if (Object.values(response)) {
      return true;
    }
    throw new ForbiddenException(FORBIDDEN);
  };

  handleResponseJSON = (response) => {
    if (![...Object.values(response)]) {
      throw new ForbiddenException(FORBIDDEN);
    }
    return response;
  };
}
