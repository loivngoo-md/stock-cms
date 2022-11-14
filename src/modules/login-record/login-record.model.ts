import { prop } from '@typegoose/typegoose';
import { BaseModel } from '../../core/abstracts/base.model';


export class LoginRecord extends BaseModel {
  @prop()
  username: string;

  @prop()
  password: string;

  @prop()
  ip: string;

  @prop()
  location: string;

  @prop()
  updatedAt: Date;

}
