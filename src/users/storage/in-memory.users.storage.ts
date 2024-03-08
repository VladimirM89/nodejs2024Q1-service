import { Injectable } from '@nestjs/common';
import { UsersStorage } from '../interface/users-storage.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class InMemoryUsersStorage implements UsersStorage {
  private users: Array<User>;

  constructor() {
    this.users = [];
  }

  create: () => void;
  findAll: () => void;
  findOne: () => void;
  update: () => void;
  remove: () => void;
}
