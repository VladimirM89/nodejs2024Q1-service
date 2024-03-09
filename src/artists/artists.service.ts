import { Inject, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistsStorage } from './interfaces/artists-storage.interface';

@Injectable()
export class ArtistsService {
  constructor(
    @Inject('ArtistsStorage') private artistsStorage: ArtistsStorage,
  ) {}

  create(createArtistDto: CreateArtistDto) {
    return this.artistsStorage.create(createArtistDto);
  }

  findAll() {
    return this.artistsStorage.findAll();
  }

  findOne(id: string) {
    return this.artistsStorage.findOne(id);
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.artistsStorage.update(id, updateArtistDto);
  }

  remove(id: string) {
    return this.artistsStorage.remove(id);
  }
}
