import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { RolesGuard } from './role.guard';
import { RoleService } from './role.service';

@Module({
  imports: [UserModule],
  providers: [RoleService, RolesGuard],
  controllers: [],
  exports: [RoleService],
})
export class RoleModule {}
