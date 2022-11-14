import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { LoginRecordModule } from './modules/login-record/login-record.module';

@Module({
  imports: [
    UserModule,
    CoreModule,
    AuthModule,
    RoleModule,
    LoginRecordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: string | number;
  static host: string;
  static isDev: boolean;

  constructor() {
    AppModule.port = process.env.PORT;
    AppModule.host = process.env.HOST;
    AppModule.isDev = process.env.NODE_ENV === 'development';
  }
}
