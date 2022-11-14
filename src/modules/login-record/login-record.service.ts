import { HttpException, Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/abstracts';
import { LoginRecordRepo } from './login-record.repository';

@Injectable()
export class LoginRecordService extends BaseService {
    constructor(private readonly _repo: LoginRecordRepo) {
        super();
    }

    async insert(dto)  {
        return await this._repo.create(dto)
    }
}