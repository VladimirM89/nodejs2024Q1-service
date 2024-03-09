import { Injectable } from '@nestjs/common';
import { UsersStorage } from '../interface/users-storage.interface';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdatePasswordDto } from '../dto/update-password.dto';

@Injectable()
export class InMemoryUsersStorage implements UsersStorage {
  private users: Array<User>;

  constructor() {
    this.users = [];
  }

  create(userDto: CreateUserDto): User {
    const { login, password } = userDto;
    const date: number = Date.now();
    const newUser = new User({
      id: uuidv4(),
      login,
      password,
      version: 1,
      createdAt: date,
      updatedAt: date,
    });

    this.users.push(newUser);
    return newUser;
  }

  findAll(): Array<User> {
    return this.users;
  }

  findOne(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  update(id: string, updatePasswordDto: UpdatePasswordDto): User {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    const updatedUser = new User({
      ...user,
      password: updatePasswordDto.newPassword,
      version: (user.version += 1),
      updatedAt: Date.now(),
    });

    this.users.splice(index, 1, updatedUser);
    return updatedUser;
  }

  remove(id: string): void {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
