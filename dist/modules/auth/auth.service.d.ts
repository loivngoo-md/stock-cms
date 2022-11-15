import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { LoginByUsernameDto } from './dto/LoginByUsernameDto';
import { LoginReturnDto } from './dto/LoginReturnDto';
import { PayLoad } from './dto/PayLoad';
import { UserDto } from '../user/dto/user-return.dto';
import { NotFound } from '../../exceptions/not-found.exception';
import { LoginRecordService } from '../login-record/login-record.service';
export declare class AuthService {
    private readonly _userService;
    private readonly _jwtService;
    private readonly _loginRecord;
    private readonly logger;
    constructor(_userService: UserService, _jwtService: JwtService, _loginRecord: LoginRecordService);
    validateUser(payload: PayLoad): Promise<any>;
    validateGoogleAccount(token: string): Promise<LoginReturnDto>;
    loginWithUsername(LoginByUsernameDto: LoginByUsernameDto, ip: string): Promise<LoginReturnDto | NotFound>;
    validatePassword(user: User, password: string): Promise<boolean>;
    createToken(user: UserDto | User): Promise<LoginReturnDto>;
}
