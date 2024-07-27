import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserLoginDto } from './dtos/login-user.dto';
import { UserAuth } from './dtos/user-auth.dto';
import { UserForgotPasswordDto } from './dtos/forgot-password.dto';
import { UserResetPasswordDto } from './dtos/reset-password.Dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserActiveDto } from './dtos/active-user.dto';
import { UserDeactiveDto } from './dtos/disable-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(payload: CreateUserDto): Promise<User> {
    const user = this.repository.create({
      ...payload,
    });
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);

    try {
      await this.repository.save(user);
      // se rappeler qu'on dois envoyer un mail au user
      return user;
    } catch (error) {
      console.log('error', error);
      throw new Error('Something went wrong during registering user');
    }
  }

  async login(credentials: UserLoginDto): Promise<UserAuth> {
    const { email, password } = credentials;
    //we verify if user exist
    const user = await this.repository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .andWhere('user.isActive = :isActive', { isActive: true })
      .getOne();
    //if user doesn't exist, we throw an error
    if (!user) {
      throw new NotFoundException(
        "Connexion impossible, l'utilisateur n'existe pas",
      );
    }

    const hashedPassword = await bcrypt.hash(password, user.salt);
    if (hashedPassword === user.password) {
      const payload = {
        numero: user.email,
        password: user.password,
      };

      const token = this.jwtService.sign(payload);
      delete user.salt;

      return {
        access_token: token,
        user,
      };
    } else {
      throw new UnauthorizedException(
        'Connexion impossible, vérifiez vos identifiants',
      );
    }
  }

  async forgotPassword(payload: UserForgotPasswordDto): Promise<void> {
    const user = await this.repository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: payload.email })
      .andWhere('user.isActive = :isActive', { isActive: true })
      .getOne();
    if (!user) {
      throw new NotFoundException(
        "Connexion impossible, l'utilisateur n'existe pas",
      );
    }

    // we send an email
    return;
  }

  async resetPassword(payload: UserResetPasswordDto): Promise<User> {
    const user = await this.repository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: payload.email })
      .andWhere('user.isActive = :isActive', { isActive: true })
      .getOne();
    if (!user) {
      throw new NotFoundException(
        "Connexion impossible, l'utilisateur n'existe pas",
      );
    }
    // verify if passwords match
    if (payload.password !== payload.confirmPassword) {
      throw new Error('Passwords do not match');
    }
    // we hash the password
    user.password = await bcrypt.hash(payload.password, user.salt);
    // we save the user
    await this.repository.save(user);
    delete user.salt;

    return user;
  }

  async updateUser(payload: UpdateUserDto, id: string): Promise<User> {
    const user = await this.repository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .andWhere('user.isActive = :isActive', { isActive: true })
      .getOne();
    if (!user) {
      throw new NotFoundException(
        "Connexion impossible, l'utilisateur n'existe pas",
      );
    }

    await this.repository.update(id, payload);

    return user;
  }

  async activeUser(payload: UserActiveDto): Promise<User> {
    const user = await this.repository
      .createQueryBuilder('user')
      .where('user.id = :id', { email: payload.id })
      .andWhere('user.isActive = :isActive', { isActive: false })
      .getOne();
    if (!user) {
      throw new NotFoundException(
        "Connexion impossible, l'utilisateur n'existe pas",
      );
    }

    await this.repository.update(payload.id, { isActive: true });
    return user;
  }

  async deactiveUser(payload: UserDeactiveDto): Promise<User> {
    const user = await this.repository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: payload.id })
      .andWhere('user.isActive = :isActive', { isActive: true })
      .getOne();
    if (!user) {
      throw new NotFoundException(
        "Connexion impossible, l'utilisateur n'existe pas",
      );
    }

    await this.repository.update(payload.id, { isActive: false });
    return user;
  }
}
