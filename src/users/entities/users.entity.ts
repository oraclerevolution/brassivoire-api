import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from '../enums/user-type.enum';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column({ unique: true, nullable: false })
  phoneNumber: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, default: UserType.USER, enum: UserType })
  userType: UserType;

  @Column({ default: false })
  isVerified: boolean;

  @Column()
  role: string;

  @Column({ default: true })
  isFirstLogin: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isActive2fa: boolean;

  @Column()
  salt: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
