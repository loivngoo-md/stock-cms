import { CreateUserDto } from './dto/create-user.dto';
import { UpdateOwnProfileDto, UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { resetPasswordDto } from './dto/reset-password.dto';
import { UserDto } from './dto/user-return.dto';
import { UpdateOwnPassword } from './dto/update-own-password.dto';
import { BaseController } from '../../core/abstracts';
import { PayLoad } from '../auth/dto/PayLoad';
export declare class UserController extends BaseController {
    private readonly _userService;
    constructor(_userService: UserService);
    getProfile(employee: PayLoad): Promise<UserDto>;
    uploadOwnAvatar(file: any, employee: any): Promise<UserDto>;
    uploadAvatar(file: any, id: string): Promise<UserDto>;
    filterUserByName(name: string): Promise<UserDto[]>;
    GetCurrentEmployee(id: string): Promise<UserDto>;
    getAll(employee: PayLoad): Promise<import("./user.model").User[] | "No user available">;
    handleRequestCreateNewUser(item: CreateUserDto): Promise<UserDto>;
    handleRequestUpdateCurrentUser(id: string, item: UpdateUserDto, employee: PayLoad): Promise<UserDto>;
    updateOwnProfile(id: string, item: UpdateOwnProfileDto): Promise<UserDto>;
    delete(id: string): Promise<boolean>;
    updateOwnPassword(user: any, input: UpdateOwnPassword): Promise<boolean>;
    resetPassword(input: resetPasswordDto): Promise<boolean>;
}
