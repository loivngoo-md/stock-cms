import { LOGIN_ERR } from './../../common/constant/error-message';
import { AuthService } from './auth.service';
import { BackendLogger } from '../../modules/logger/BackendLogger';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PayLoad } from './dto/PayLoad';
import { PassportStrategy } from '@nestjs/passport';
import { SESSION_USER } from '../../common/constant/constants';
import { SessionMiddleware } from '../../middleware/session.middleware';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new BackendLogger(JwtStrategy.name);

  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: PayLoad) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      this.logger.debug(`Invalid/expired payload: ${JSON.stringify(payload)}`);
      throw new UnauthorizedException(LOGIN_ERR);
    }
    SessionMiddleware.set(SESSION_USER, user);
    return user;
  }
}
