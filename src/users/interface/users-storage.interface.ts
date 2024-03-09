import { CreateUserDto } from "../dto/create-user.dto";
import { UpdatePasswordDto } from "../dto/update-password.dto";
import { User } from "../entities/user.entity";

export interface UsersStorage {
  create(createUserDto: CreateUserDto): User;
  findAll(): Array<User>;
  findOne(id: string): User | undefined;
  update(id: string, updatePasswordDto: UpdatePasswordDto): User;
  remove: (id: string) => void;
}
