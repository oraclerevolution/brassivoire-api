import { User } from '../entities/users.entity';

export interface UserAuth {
  access_token: string;
  user: Partial<User>;
}
