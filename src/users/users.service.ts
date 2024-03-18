import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getUserResponse } from 'src/utils/getUserResponse';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    //TODO: refactor
    const newUser = new User({
      login: createUserDto.login,
      password: createUserDto.password,
    });

    const result = await this.userRepository.save(newUser);
    return getUserResponse(result);
  }

  findAll(): Promise<Array<User>> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdatePasswordDto) {
    const user = await this.findOne(id);
    const updatedUser = new User({
      ...user,
      password: updateUserDto.newPassword,
    });

    const result = await this.userRepository.save(updatedUser);
    return getUserResponse(result);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async checkUserPassword(id: string, password: string) {
    const user = await this.findOne(id);
    return user.password === password;
  }
}
