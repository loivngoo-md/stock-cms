import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { BaseRepository } from '../../core/abstracts/base.repository';

import { ModelType } from 'typegoose';
import { User } from './user.model';
import { UserDto } from './dto/user-return.dto';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectModel(User)
    private readonly _userModel: ModelType<User>,
  ) {
    super(_userModel);
  }

  async findByName(name: string | RegExp): Promise<UserDto[]> {
    return await this._userModel
      .find({
        $or: [{ lastName: name }, { firstName: name }],
      })
      .lean();
  }
  async findByUsername(username: string): Promise<User> {
    return await this._userModel.findOne({ username }).lean();
  }

  async retrieve(): Promise<User[]> {
    return await this._userModel.find({}).select('password');
  }
}
