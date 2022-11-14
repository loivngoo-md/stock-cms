import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

import { CreateUserDto } from './dto/create-user.dto';
import { resetPasswordDto } from './dto/reset-password.dto';
import { UpdateOwnPassword } from './dto/update-own-password.dto';
import { UpdateOwnProfileDto, UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user-return.dto';

import { User } from './user.model';

import { UserRepository } from './user.repository';

import response from '../../utils/handle-response';
import { BaseService } from '../../core/abstracts';

@Injectable()
export class UserService extends BaseService {
  constructor(private readonly _userRepository: UserRepository) {
    super();
  }

  async excutingRequestCreate(user: CreateUserDto) {

    const isExisted = await this._userRepository.findByUsername(user.username)

    if (isExisted) {
      throw new BadRequestException('Username is existed.')
    }

    const response: UserDto = await this._userRepository.create(user);

     return this.handleResponseJSON(response) as typeof response;
  }

  async excutingRequestDelete(_id: string) {
    const response = await this._userRepository.delete(_id);

    return this.handleResponseBoolean(response);
  }

  async excutingRequestFilter(filter: object) {
    const response: User = await this._userRepository.findOne(filter);

    return this.handleResponseJSON(response) as typeof response;
  }

  async excutingRequestRetrieve() {
    const response: User[] = await this._userRepository.find();

    if (!response ) {
      return `No user available`;
    }
    return this.handleResponseJSON(response) as typeof response;
  }

  async excutingRequestUpdateCurrentUser(id: string, user: UpdateUserDto) {
    const response: UserDto = await this._userRepository.update(id, user);

    return this.handleResponseJSON(response) as typeof response;
  }

  async excutingRequestUpdateProfile(id: string, user: UpdateOwnProfileDto) {
    const response: UserDto = await this._userRepository.update(id, user);

    return this.handleResponseJSON(response) as typeof response;
  }

  // async upsertOwnProfile(id: string, update: UpdateOwnProfileDto) {
  //   try {
  //     const response: UserDto =
  //       await this._userRepository.upsertOne({ id }, update, true);

  //     return response
  //       ? response
  //       : new ForbiddenException(FORBIDDEN)
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async excutingRequestUpsert(
    _id: string,
    update: UpdateUserDto | UpdateOwnProfileDto,
  ) {
    const response: UserDto = await this._userRepository.upsertOne(
      { _id },
      update,
      true,
    );

    return this.handleResponseJSON(response) as typeof response;
  }

  async excutingRequestFindById(_id: string) {
    const response: UserDto = await this._userRepository.findById(_id);

    return this.handleResponseJSON(response) as typeof response;
  }

  async excutingRequestUpdateCurrentPassword(
    id: string,
    input: UpdateOwnPassword,
  ) {
    const password = bcryptjs.hashSync(input.newPassword, 10);

    const response = await this._userRepository.update(id, {
      password,
    });

    return this.handleResponseBoolean(response);
  }

  async excutingRequestChangePassword(
    id: string,
    input: resetPasswordDto,
  ): Promise<boolean> {
    const user: User = await this._userRepository.findById(input.userId);

    if (!user) {
      return false;
    }

    const password = bcryptjs.hashSync(input.newPassword, 10);

    const response = await this._userRepository.update(id, {
      password,
    });

    return this.handleResponseBoolean(response);
  }

  async excutingRequestFindByName(arg: string) {
    const name = new RegExp(arg, 'i');

    const response: UserDto[] = await this._userRepository.findByName(name);

    return this.handleResponseJSON(response) as typeof response;
  }
}
