import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { Payload } from './interfaces/payload.interface';
import { UsersService } from 'src/users/users.service';
import { UserType } from 'src/users/enums/user-type.enum';

const HEADER_AUTHENTICATION_TOKEN_KEY = 'adminuser';
export const FULL_ADMIN_AUTH_GUARD = 'FULL_ADMIN_AUTH_GUARD';

@Injectable()
export class FullAdminAuthStrategy extends PassportStrategy(
  Strategy,
  FULL_ADMIN_AUTH_GUARD,
) {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
    private readonly userService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader(HEADER_AUTHENTICATION_TOKEN_KEY),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: Payload) {
    const user = await this.userService.getUserByEmail(payload.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (user.userType !== UserType.ADMIN) {
      throw new UnauthorizedException("Vous n'êtes pas un administrateur");
    }

    return user;
  }
}
