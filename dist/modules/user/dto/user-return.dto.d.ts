import { mongoose } from '@typegoose/typegoose';
import { Role } from '../../../common/enums';
export declare class UserDto {
    _id: mongoose.Types.ObjectId;
    username: string;
    role: Role;
    avatarCode: string;
}
