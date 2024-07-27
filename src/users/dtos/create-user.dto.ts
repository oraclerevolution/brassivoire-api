import { UserType } from '../enums/user-type.enum';

export type CreateUserDto = {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  userType: UserType;
};
