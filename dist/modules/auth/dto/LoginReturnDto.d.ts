import { Role } from '../../../common/enums';
export declare class LoginReturnDto {
    accessToken: string;
    expiresIn: string;
    username: string;
    role: Role;
}
