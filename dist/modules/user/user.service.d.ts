import { CreateUserDto } from './dto/create-user.dto';
import { resetPasswordDto } from './dto/reset-password.dto';
import { UpdateOwnPassword } from './dto/update-own-password.dto';
import { UpdateOwnProfileDto, UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user-return.dto';
import { User } from './user.model';
import { UserRepository } from './user.repository';
import { BaseService } from '../../core/abstracts';
export declare class UserService extends BaseService {
    private readonly _userRepository;
    constructor(_userRepository: UserRepository);
    excutingRequestCreate(user: CreateUserDto): Promise<UserDto>;
    excutingRequestDelete(_id: string): Promise<boolean>;
    excutingRequestFilter(filter: object): Promise<User>;
    excutingRequestRetrieve(): Promise<User[] | "No user available">;
    excutingRequestUpdateCurrentUser(id: string, user: UpdateUserDto): Promise<UserDto>;
    excutingRequestUpdateProfile(id: string, user: UpdateOwnProfileDto): Promise<UserDto>;
    excutingRequestUpsert(_id: string, update: UpdateUserDto | UpdateOwnProfileDto): Promise<UserDto>;
    excutingRequestFindById(_id: string): Promise<UserDto>;
    excutingRequestUpdateCurrentPassword(id: string, input: UpdateOwnPassword): Promise<boolean>;
    excutingRequestChangePassword(id: string, input: resetPasswordDto): Promise<boolean>;
    excutingRequestFindByName(arg: string): Promise<UserDto[]>;
}
