import { prop, pre } from '@typegoose/typegoose';
import * as bcryptjs from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { Role } from '../../common/enums';
import { BaseModel } from '../../core/abstracts/base.model';

@pre<User>('save', function (next) {
  // Only hash the password if the field has been modified. In other words, don't generate
  // a new hash each time the user doc is saved.
  if (!this.isModified('password')) {
    return next();
  }

  // Hash the password before saving
  this.password = bcryptjs.hashSync((this as any).password, 10);

  next();
})
export class User extends BaseModel {
  @prop({ unique: true })
  username: string;

  // @prop({ unique: true })
  // email: string;

  @prop({ required: true })
  password: string;

  @prop({ default: Role.NORMAL })
  role: Role;

  @prop({ default: null })
  avatarCode: string;
}
