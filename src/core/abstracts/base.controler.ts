import { PayLoad } from '../../modules/auth/dto/PayLoad';
import { Action } from '../../modules/common/enums';
import { BackendLogger } from '../../modules/logger/BackendLogger';

export class BaseController {
  private readonly _logger: BackendLogger;

  constructor(name: string) {
    this._logger = new BackendLogger(name);
  }

  logRequest(employee: PayLoad, action: Action) {
    this._logger.log(
      `Logging: Permission[${employee.role}], username[${employee.username}] is executing ${action} Request`,
    );
  }
}
