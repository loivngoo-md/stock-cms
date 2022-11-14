import { Controller } from '@nestjs/common';
import { LoginRecordService } from './login-record.service';

@Controller('login-record')
export class LoginRecordController {
  constructor(private readonly loginRecordService: LoginRecordService) {}
}
