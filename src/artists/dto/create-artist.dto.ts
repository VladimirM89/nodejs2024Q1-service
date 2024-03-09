import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateArtistDto {
  @IsNotEmpty({ message: 'Artist name not should be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Login not should be empty' })
  @IsBoolean()
  grammy: boolean;
}
