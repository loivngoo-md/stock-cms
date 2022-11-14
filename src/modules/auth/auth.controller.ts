import { INVALID_TOKEN } from './../../common/constant/error-message';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Ip,
  Post,
} from '@nestjs/common';
import { UnprocessableException } from '../../exceptions/unProcessable.exception';
import { AuthService } from './auth.service';
import { LoginByUsernameDto } from './dto/LoginByUsernameDto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginReturnDto } from './dto/LoginReturnDto';
import { Tag } from '../../common/constant/swagger.constant';
import ROUTER from '../../common/constant/router.constant';
import { NotFound } from '../../exceptions/not-found.exception';
import { RealIP } from 'nestjs-real-ip';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';


@ApiBearerAuth(Tag.Token)
@ApiTags(Tag.Auth)
@Controller(ROUTER.Auth)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
    ) { }

    @Post('signup')
    async signup(@Body() input: CreateUserDto) {
      return this.userService.excutingRequestCreate(input)
    }

  @ApiResponse({
    status: HttpStatus.OK,
    type: LoginReturnDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    type: NotFound,
  })
  @Post('login')
  async login(@Body() input: LoginByUsernameDto, @RealIP() ip: string) {
    try {
      return this.authService.loginWithUsername(input, ip);
    } catch (error) {
      throw error;
    }
  }

  @ApiResponse({
    type: LoginReturnDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    type: HttpException,
    status: HttpStatus.NOT_FOUND | HttpStatus.UNPROCESSABLE_ENTITY,
  })
  @Post('TokenGoogle')
  async validateToken(@Body() req): Promise<LoginReturnDto | HttpException> {
    try {
      if (!req.token) {
        throw new UnprocessableException(INVALID_TOKEN);
      }

      return await this.authService.validateGoogleAccount(req.token);
    } catch (error) {
      throw error;
    }
  }
}
