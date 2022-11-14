import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../../common/enums';

export class LoginReturnDto {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  expiresIn: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  role: Role;
}
