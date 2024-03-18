import { Inject, Injectable } from '@nestjs/common';
import { FavoritesStorage } from './interfaces/favorites-storage.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorite } from './entities/favorite.entity';
import { Repository } from 'typeorm';
@Injectable()
export class FavoritesService {
  constructor(
    @Inject('FavoritesStorage')
    private readonly favoritesStorage: FavoritesStorage,
    @InjectRepository(Favorite)
    private favoritesRepository: Repository<Favorite>,
  ) {}

  findAll() {
    // return this.favoritesStorage.findAll();
    return this.favoritesRepository.find();
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
