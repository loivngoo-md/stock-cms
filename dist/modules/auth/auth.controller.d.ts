import { HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginByUsernameDto } from './dto/LoginByUsernameDto';
import { LoginReturnDto } from './dto/LoginReturnDto';
import { NotFound } from '../../exceptions/not-found.exception';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    signup(input: CreateUserDto): Promise<import("../user/dto/user-return.dto").UserDto>;
    login(input: LoginByUsernameDto, ip: string): Promise<NotFound | LoginReturnDto>;
    validateToken(req: any): Promise<LoginReturnDto | HttpException>;
}
