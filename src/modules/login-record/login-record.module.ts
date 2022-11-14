import { Module } from '@nestjs/common';
import { LoginRecordService } from './login-record.service';
import { LoginRecordController } from './login-record.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { LoginRecord } from './login-record.model';
import { LoginRecordRepo } from './login-record.repository';

@Module({
  imports: [TypegooseModule.forFeature([LoginRecord])],
  controllers: [LoginRecordController],
  providers: [LoginRecordService, LoginRecordRepo],
  exports: [LoginRecordService, LoginRecordRepo]
})
export class LoginRecordModule {}
