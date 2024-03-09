import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Login not should be empty' })
  @IsString()
  login: string;

  @IsNotEmpty({ message: 'Password not should be empty' })
  @IsString()
  password: string;
}
