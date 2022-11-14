import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class resetPasswordDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  newPassword: string;
}
