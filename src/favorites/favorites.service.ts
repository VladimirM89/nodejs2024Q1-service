import { Inject, Injectable } from '@nestjs/common';
import { FavoritesStorage } from './interfaces/favorites-storage.interface';

@Injectable()
export class FavoritesService {
  constructor(
    @Inject('FavoritesStorage')
    private readonly favoritesStorage: FavoritesStorage,
  ) {}

  findAll() {
    return this.favoritesStorage.findAll();
  }

  createArtist(artistId: string) {
    return this.favoritesStorage.createArtist(artistId);
  }

  removeArtist(artistId: string) {
    return this.favoritesStorage.deleteArtist(artistId);
  }

  createAlbum(albumId: string) {
    return this.favoritesStorage.createAlbum(albumId);
  }

  removeAlbum(albumId: string) {
    return this.favoritesStorage.deleteAlbum(albumId);
  }

  createTrack(trackId: string) {
    return this.favoritesStorage.createTrack(trackId);
  }

  removeTrack(trackId: string) {
    return this.favoritesStorage.deleteTrack(trackId);
  }
}
