import {
  Body,
  Controller,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/users.entity';
import { UserAuth } from './dtos/user-auth.dto';
import { UserForgotPasswordDto } from './dtos/forgot-password.dto';
import { UserLoginDto } from './dtos/login-user.dto';
import { UserResetPasswordDto } from './dtos/reset-password.Dto';
import { UserActiveDto } from './dtos/active-user.dto';
import { UserDeactiveDto } from './dtos/disable-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { FullAuthGuard } from 'src/full-auth-guard/full-auth-guard.guard';
import { FullAdminAuthGuard } from 'src/full-admin-auth-guard/full-admin-auth-guard.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(FullAdminAuthGuard)
  @Post('register')
  async register(@Body() payload: CreateUserDto): Promise<User> {
    return await this.userService.register(payload);
  }

  @Post('login')
  async login(@Body() payload: UserLoginDto): Promise<UserAuth> {
    return await this.userService.login(payload);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() payload: UserForgotPasswordDto): Promise<void> {
    return await this.userService.forgotPassword(payload);
  }

  @Patch('reset-password')
  async resetPassword(@Body() payload: UserResetPasswordDto): Promise<User> {
    return await this.userService.resetPassword(payload);
  }

  @UseGuards(FullAuthGuard)
  @Patch('update-user')
  async updateUser(
    @Body() payload: UpdateUserDto,
    @Query('id') id: string,
  ): Promise<User> {
    return await this.userService.updateUser(payload, id);
  }

  @UseGuards(FullAuthGuard)
  @UseGuards(FullAdminAuthGuard)
  @Patch('active-user')
  async activeUser(@Body() payload: UserActiveDto): Promise<User> {
    return await this.userService.activeUser(payload);
  }

  @UseGuards(FullAuthGuard)
  @UseGuards(FullAdminAuthGuard)
  @Patch('deactive-user')
  async deactiveUser(@Body() payload: UserDeactiveDto): Promise<User> {
    return await this.userService.deactiveUser(payload);
  }
}
