import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getUserResponse } from 'src/utils/getUserResponse';

@Injectable()
export class UsersService {
  // constructor(@Inject('UsersStorage') private usersStorage: UsersStorage) {}
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // return this.usersStorage.create(createUserDto);
    // const { login, password } = createUserDto;
    // const date: number = Date.now();
    const newUser = new User({
      // id: uuidv4(),
      login: createUserDto.login,
      password: createUserDto.password,
      // version: 1,
      // createdAt: date,
      // updatedAt: date,
    });

    const result = await this.userRepository.save(newUser);
    return getUserResponse(result);
  }

  findAll(): Promise<Array<User>> {
    // return this.usersStorage.findAll();
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User | null> {
    // return this.usersStorage.findOne(id);
    return this.userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdatePasswordDto) {
    // return this.usersStorage.update(id, updateUserDto);
    const user = await this.findOne(id);
    const updatedUser = new User({
      ...user,
      password: updateUserDto.newPassword,
      version: (user.version += 1),
      // updatedAt: Date.now(),
    });

    // return this.userRepository.save(updatedUser);

    const result = await this.userRepository.save(updatedUser);
    return getUserResponse(result);
  }

  async remove(id: string): Promise<void> {
    // this.usersStorage.remove(id);
    await this.userRepository.delete(id);
  }

  async checkUserPassword(id: string, password: string) {
    // const user = this.findOne(id);
    // return user.password === password;
    const user = await this.findOne(id);
    return user.password === password;
  }
}
