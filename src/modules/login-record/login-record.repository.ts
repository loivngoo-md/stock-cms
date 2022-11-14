import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { BaseRepository } from '../../core/abstracts/base.repository';

import { ModelType } from 'typegoose';
import { LoginRecord } from './login-record.model';

@Injectable()
export class LoginRecordRepo extends BaseRepository<LoginRecord> {
  constructor(
    @InjectModel(LoginRecord)
    private readonly _loginRecordModel: ModelType<LoginRecord>,
  ) {
    super(_loginRecordModel);
  }
}
