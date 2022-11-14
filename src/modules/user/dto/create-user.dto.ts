import { ENUM_ERR } from './../../../common/constant/error-message';
import { IsEnum, IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { Role } from '../../../common/enums';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

}
