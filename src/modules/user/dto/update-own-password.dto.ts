import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateOwnPassword {
  @ApiProperty()
  @IsString()
  newPassword: string;
}
