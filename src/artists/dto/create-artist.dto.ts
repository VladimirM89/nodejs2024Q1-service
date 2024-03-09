import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateArtistDto {
  @IsNotEmpty({ message: 'Artist name not should be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Artist property grammy not should be empty' })
  @IsBoolean()
  grammy: boolean;
}
