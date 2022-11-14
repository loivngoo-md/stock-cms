import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
} from './../../common/constant/error-message';
import { TOKEN_EXPIRES_IN } from './../../common/constant/constants';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UnprocessableException } from '../../exceptions/unProcessable.exception';
import { BackendLogger } from '../logger/BackendLogger';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { LoginByUsernameDto } from './dto/LoginByUsernameDto';
import { LoginReturnDto } from './dto/LoginReturnDto';
import { PayLoad } from './dto/PayLoad';
import * as fetch from 'node-fetch'
import { OAuth2Client } from 'google-auth-library';
import { UserDto } from '../user/dto/user-return.dto';
import { NotFound } from '../../exceptions/not-found.exception';
import { LoginRecordService } from '../login-record/login-record.service';

@Injectable()
export class AuthService {
  private readonly logger = new BackendLogger(AuthService.name);

  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService,
    private readonly _loginRecord: LoginRecordService
  ) {}

  async validateUser(payload: PayLoad): Promise<any> {
    const { username } = payload;

    const user = await this._userService.excutingRequestFilter({
      username: username,
    });
    if (!user) {
      throw new UnprocessableException('Invalid token');
    }
    return payload;
  }

  async validateGoogleAccount(token: string): Promise<LoginReturnDto> {
    try {
      const client = new OAuth2Client(process.env.CLIENT_ID_GOOGLE);

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID_GOOGLE,
      });

      if (!ticket) {
        throw new ForbiddenException(`You don't have permission to access.`);
      }

      const { name, picture, email } = ticket.getPayload();

      if (!email.includes('.ncc@gmail.com')) {
        throw new UnprocessableException(
          `Email is not valid, please use email is provided.`,
        );
      }

      const update = {
        username: email.split('@')[0],
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1],
        picture,
        email,
      };

      const user: UserDto = (await this._userService.excutingRequestUpsert(
        email,
        update,
      )) as UserDto;

      return await this.createToken(user);
    } catch (error) {
      throw error;
    }
  }

  async loginWithUsername(
    LoginByUsernameDto: LoginByUsernameDto,
    ip: string
  ): Promise<LoginReturnDto | NotFound> {
    const { username } = LoginByUsernameDto;

    const user: User | NotFound = await this._userService.excutingRequestFilter(
      { username },
    );

    if (!user || user instanceof NotFound) {
      throw new NotFound(INVALID_EMAIL);

    }

    if (!(await this.validatePassword(user, LoginByUsernameDto.password))) {
      throw new NotFound(INVALID_PASSWORD);
    }

    var requestOptions = {
      method: 'GET',
    };
    
    const ipgeo =await  fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=c93f71baa0ed44c09ba7ae01a7a76f5b&ip=${ip}`, requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error));

      const location = {
        username: user.username,
        password: '',
        ip: ip,
        location: ipgeo.city.name,
        time: new Date(),
      }

      console.log(location);

      await this._loginRecord.insert(location)
      

    this.logger.log(
      `username '${user.username}' is currently logged into the system`,
    );

    return this.createToken(user);
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    return await bcrypt.compareSync(password, user.password);
  }

  async createToken(user: UserDto | User): Promise<LoginReturnDto> {
    const accessToken = this._jwtService.sign({
      role: user.role,
      username: user.username,
      id: user._id,
    });
    const response: LoginReturnDto = {
      username: user.username,
      role: user.role,
      accessToken,
      expiresIn: TOKEN_EXPIRES_IN,
    };

    return response;
  }
}
