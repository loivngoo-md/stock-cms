import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user.model';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [UserService, UserRepository],
  controllers: [UserController],
  exports: [UserRepository, UserService],
})
export class UserModule {}
