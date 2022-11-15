import { PayLoad } from '../../modules/auth/dto/PayLoad';
import { Action } from '../../modules/common/enums';
export declare class BaseController {
    private readonly _logger;
    constructor(name: string);
    logRequest(employee: PayLoad, action: Action): void;
}
