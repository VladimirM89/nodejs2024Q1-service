import { Inject, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistsStorage } from './interfaces/artists-storage.interface';
import { AlbumsService } from 'src/albums/albums.service';

@Injectable()
export class ArtistsService {
  constructor(
    @Inject('ArtistsStorage') private artistsStorage: ArtistsStorage, private readonly albumsService: AlbumsService) {}

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
    // TODO: delete Artist from Track entity
    this.albumsService.removeArtistFromAlbum(id);
    return this.artistsStorage.remove(id);
  }
}
