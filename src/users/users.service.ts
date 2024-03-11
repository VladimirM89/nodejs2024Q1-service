import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersStorage } from './interface/users-storage.interface';
import { User } from './entities/user.entity';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('UsersStorage') private usersStorage: UsersStorage) {}

  create(createUserDto: CreateUserDto): User {
    return this.usersStorage.create(createUserDto);
  }

  findAll(): Array<User> {
    return this.usersStorage.findAll();
  }

  findOne(id: string) {
    return this.usersStorage.findOne(id);
  }

  update(id: string, updateUserDto: UpdatePasswordDto) {
    return this.usersStorage.update(id, updateUserDto);
  }

  remove(id: string) {
    this.usersStorage.remove(id);
  }

  checkUserPassword(id: string, password: string) {
    const user = this.findOne(id);
    return user.password === password;
  }
}
