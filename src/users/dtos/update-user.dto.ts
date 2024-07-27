import { UserType } from '../enums/user-type.enum';

export type UpdateUserDto = {
  username?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  userType?: UserType;
  isActive?: boolean;
  isActive2fa?: boolean;
  isVerified?: boolean;
};
