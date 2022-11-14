import { UserInterceptor } from './../../common/inceptor/transform.interceptor';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Role } from '../../common/enums';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';
import { hasRoles } from '../role/role.decorator';
import { RolesGuard } from '../role/role.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateOwnProfileDto, UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { checkValidMongoId } from '../../common/utils';
import { resetPasswordDto } from './dto/reset-password.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from '../../core/uploads';
import { GetCurrentEmployee } from './user.decorator';
import { UserDto } from './dto/user-return.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Tag } from '../../common/constant/swagger.constant';
import { UpdateOwnPassword } from './dto/update-own-password.dto';
import { BaseController } from '../../core/abstracts';
import { Action } from '../common/enums';
import { PayLoad } from '../auth/dto/PayLoad';

@ApiBearerAuth(Tag.Token)
@ApiTags(Tag.User)
@Controller('users')
// @UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(UserInterceptor)
export class UserController extends BaseController {
  constructor(private readonly _userService: UserService) {
    super(`UserController`);
  }

  @ApiOkResponse({
    type: UserDto,
  })
  @ApiForbiddenResponse()
  @hasRoles(...Object.values(Role))
  @Get('profile')
  async getProfile(@GetCurrentEmployee() employee: PayLoad) {
    this.logRequest(employee, Action.Get);

    return await this._userService.excutingRequestFindById(employee.id);
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiInternalServerErrorResponse()
  @hasRoles(...Object.values(Role))
  @UseInterceptors(FileInterceptor('file', storage))
  @Post('upload-own-avatar')
  async uploadOwnAvatar(@UploadedFile() file, @GetCurrentEmployee() employee) {
    try {
      const _id = employee.userId;

      const update = { avatarCode: file.filename } as UpdateUserDto;

      this.logRequest(employee, Action.Upload);

      return await this._userService.excutingRequestUpdateCurrentUser(
        _id,
        update,
      );
    } catch (error) {
      throw error;
    }
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiInternalServerErrorResponse()
  @hasRoles(Role.ADMIN)
  @UseInterceptors(FileInterceptor('file', storage))
  @Post('upload-avatar/:id')
  async uploadAvatar(@UploadedFile() file, @Param('id') id: string) {
    try {
      const update = { avatarCode: file.filename } as UpdateUserDto;

      return await this._userService.excutingRequestUpsert(id, update);
    } catch (error) {
      throw error;
    }
  }

  @ApiOkResponse({ type: [UserDto] })
  @ApiForbiddenResponse()
  @hasRoles(...Object.values(Role))
  @Get()
  async filterUserByName(@Query('name') name: string) {
    try {
      return await this._userService.excutingRequestFindByName(name);
    } catch (error) {
      throw error;
    }
  }

  @ApiOkResponse({ type: UserDto })
  @ApiForbiddenResponse()
  @hasRoles(...Object.values(Role))
  @Get('/:id')
  async GetCurrentEmployee(@Param('id') id: string) {
    return await this._userService.excutingRequestFindById(id);
  }

  @ApiOkResponse({ type: [UserDto] })
  @ApiForbiddenResponse()
  @hasRoles(Role.ADMIN, Role.PM)
  @Get()
  async getAll(@GetCurrentEmployee() employee: PayLoad) {
    this.logRequest(employee, Action.Retrieve);

    return await this._userService.excutingRequestRetrieve();
  }

  @ApiCreatedResponse({ type: UserDto })
  @ApiForbiddenResponse()
  // @hasRoles(Role.ADMIN)
  @Post('/insert')
  async handleRequestCreateNewUser(
    @Body() item: CreateUserDto,
    // @GetCurrentEmployee() employee: PayLoad,
  ) {
    // this.logRequest(employee, Action.Create);

    return await await this._userService.excutingRequestCreate(item);
  }

  @ApiOkResponse({ type: UserDto })
  @ApiForbiddenResponse()
  @hasRoles(Role.ADMIN, Role.PM)
  @Patch('/update/:id')
  async handleRequestUpdateCurrentUser(
    @Param('id') id: string,
    @Body() item: UpdateUserDto,
    @GetCurrentEmployee() employee: PayLoad,
  ) {
    try {
      this.logRequest(employee, Action.Update);

      return await this._userService.excutingRequestUpdateCurrentUser(id, item);
    } catch (error) {
      throw error;
    }
  }

  @ApiOkResponse({ type: UpdateOwnProfileDto })
  @ApiForbiddenResponse()
  @hasRoles(...Object.values(Role))
  @Patch('/update-own-profile/:id')
  async updateOwnProfile(
    @Param('id') id: string,
    @Body() item: UpdateOwnProfileDto,
  ) {
    try {
      return await this._userService.excutingRequestUpsert(id, item);
    } catch (error) {
      throw error;
    }
  }

  @ApiOkResponse({ type: Boolean })
  @ApiForbiddenResponse()
  @hasRoles(Role.ADMIN, Role.PM)
  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    try {
      checkValidMongoId(id);
      return await this._userService.excutingRequestDelete(id);
    } catch (error) {
      throw error;
    }
  }

  @ApiOkResponse({ type: UpdateOwnPassword })
  @ApiForbiddenResponse()
  @hasRoles(...Object.values(Role))
  @Post('/update-own-password')
  async updateOwnPassword(
    @GetCurrentEmployee() user,
    @Body() input: UpdateOwnPassword,
  ) {
    try {
      return await this._userService.excutingRequestUpdateCurrentPassword(
        user.userId,
        input,
      );
    } catch (error) {
      throw error;
    }
  }

  @ApiResponse({
    type: resetPasswordDto,
    status: HttpStatus.OK,
  })
  @ApiForbiddenResponse()
  @hasRoles(Role.ADMIN, Role.PM)
  @Post('reset-password')
  async resetPassword(@Body() input: resetPasswordDto) {
    try {
      return await this._userService.excutingRequestChangePassword(
        input.userId,
        input,
      );
    } catch (error) {
      throw error;
    }
  }
}
