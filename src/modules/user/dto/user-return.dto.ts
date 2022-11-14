import { ApiProperty } from '@nestjs/swagger';
import { mongoose } from '@typegoose/typegoose';
import { IsNotEmpty, IsString, IsEmail, IsEnum } from 'class-validator';
import { Role } from '../../../common/enums';
import { User } from '../user.model';

export class UserDto {
  @IsNotEmpty({ message: `Missing _id field.` })
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  @IsString()
  username: string;

  // @ApiProperty()
  // @IsEmail()
  // email: string;

  @ApiProperty()
  @IsEnum(Role)
  role: Role;

  @ApiProperty()
  @IsString()
  avatarCode: string;
}
