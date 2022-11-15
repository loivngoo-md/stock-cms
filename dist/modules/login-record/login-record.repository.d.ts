import { BaseRepository } from '../../core/abstracts/base.repository';
import { ModelType } from 'typegoose';
import { LoginRecord } from './login-record.model';
export declare class LoginRecordRepo extends BaseRepository<LoginRecord> {
    private readonly _loginRecordModel;
    constructor(_loginRecordModel: ModelType<LoginRecord>);
}
