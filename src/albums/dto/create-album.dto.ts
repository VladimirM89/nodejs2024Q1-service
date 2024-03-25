import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty({ message: 'Album name not should be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Album year not should be empty' })
  @IsInt()
  year: number;

  @IsOptional()
  @IsString()
  artistId: string | null; // refers to Artist
}
