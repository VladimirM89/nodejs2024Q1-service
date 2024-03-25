/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from 'src/users/entities/user.entity';
import { UserResponse } from 'src/users/interface/users-storage.interface';

export function getUserResponse(user: User): UserResponse {
  const { password, ...rest } = user;
  return {
    ...rest,
    createdAt: new Date(rest.createdAt).getTime(),
    updatedAt: new Date(rest.updatedAt).getTime(),
  };
}
