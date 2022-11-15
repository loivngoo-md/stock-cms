import { Role } from '../../../common/enums';
export declare class UpdateUserDto {
    username: string;
    email: string;
    role: Role;
    firstName: string;
    lastName: string;
    avatarCode: string;
}
export declare class UpdateOwnProfileDto {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}
