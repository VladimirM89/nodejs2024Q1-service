import { User } from '../entities/user.entity';

export type UserResponse = Omit<
  User,
  'password' | 'createdAt' | 'updatedAt'
> & {
  createdAt: number;
  updatedAt: number;
};
