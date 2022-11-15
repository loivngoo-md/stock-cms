import { AuthService } from './auth.service';
import { Strategy } from 'passport-jwt';
import { PayLoad } from './dto/PayLoad';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    private readonly logger;
    constructor(authService: AuthService);
    validate(payload: PayLoad): Promise<any>;
}
export {};
