import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTrackDto {
  @IsNotEmpty({ message: 'Track name not should be empty' })
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  artistId: string | null; // refers to Artist

  @IsOptional()
  @IsString()
  albumId: string | null; // refers to Album

  @IsNotEmpty({ message: 'Track duration not should be empty' })
  @IsInt()
  duration: number; // integer number
}
