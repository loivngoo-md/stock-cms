import { Role } from '../../common/enums';
import { BaseModel } from '../../core/abstracts/base.model';
export declare class User extends BaseModel {
    username: string;
    password: string;
    role: Role;
    avatarCode: string;
}
