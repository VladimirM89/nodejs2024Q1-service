import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';
import { Artist } from '../entities/artist.entity';

export interface ArtistsStorage {
  create(createArtistDto: CreateArtistDto): Artist;
  findAll(): Array<Artist>;
  findOne(id: string): Artist | undefined;
  update(id: string, updateArtistDto: UpdateArtistDto): Artist;
  remove: (id: string) => void;
}
