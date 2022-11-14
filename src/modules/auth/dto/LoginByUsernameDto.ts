import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class LoginByUsernameDto {
  @ApiProperty({ default: 'admin' })
  @IsString()
  username: string;

  @ApiProperty({ default: 'admin' })
  @IsString()
  password: string;

}
