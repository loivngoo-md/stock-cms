import { BaseModel } from '../../core/abstracts/base.model';
export declare class LoginRecord extends BaseModel {
    username: string;
    password: string;
    ip: string;
    location: string;
    updatedAt: Date;
}
