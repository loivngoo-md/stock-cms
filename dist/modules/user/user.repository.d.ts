import { BaseRepository } from '../../core/abstracts/base.repository';
import { ModelType } from 'typegoose';
import { User } from './user.model';
import { UserDto } from './dto/user-return.dto';
export declare class UserRepository extends BaseRepository<User> {
    private readonly _userModel;
    constructor(_userModel: ModelType<User>);
    findByName(name: string | RegExp): Promise<UserDto[]>;
    findByUsername(username: string): Promise<User>;
    retrieve(): Promise<User[]>;
}
