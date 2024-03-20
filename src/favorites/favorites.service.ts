import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteTrack } from './entities/favoriteTrack.entity';
import { Repository } from 'typeorm';
import { FavoriteArtist } from './entities/favoriteArtist.entity';
import { FavoriteAlbum } from './entities/favoriteAlbum.entity';
@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteArtist)
    private favoriteArtistRepository: Repository<FavoriteArtist>,
    @InjectRepository(FavoriteAlbum)
    private favoriteAlbumRepository: Repository<FavoriteAlbum>,
    @InjectRepository(FavoriteTrack)
    private favoriteTrackRepository: Repository<FavoriteTrack>,
  ) {}

  async findAll() {
    const artists = await this.favoriteArtistRepository.find({
      relations: { artist: true },
    });
    const albums = await this.favoriteAlbumRepository.find({
      relations: { album: true },
    });
    const tracks = await this.favoriteTrackRepository.find({
      relations: { track: true },
    });

    const art = artists.map((item) => item.artist);
    const alb = albums.map((item) => item.album);
    const tr = tracks.map((item) => item.track);

    // console.log({ albums: alb, artists: art, tracks: tr });
    return { albums: alb, artists: art, tracks: tr };
  }

  async createArtist(artistId: string) {
    // return this.favoritesStorage.createArtist(artistId);
    const artist = this.favoriteArtistRepository.create({ artistId });

    try {
      return await this.favoriteArtistRepository.save(artist);
    } catch {
      throw new HttpException(
        'Artist already exist in favorites',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // console.log(artist);
    // return artist;
  }

  async removeArtist(artistId: string) {
    // return this.favoritesStorage.deleteArtist(artistId);
    return await this.favoriteArtistRepository.delete({ artistId });
  }

  async createAlbum(albumId: string) {
    // return this.favoritesStorage.createAlbum(albumId);
    const album = this.favoriteAlbumRepository.create({ albumId });

    try {
      return await this.favoriteAlbumRepository.save(album);
    } catch {
      throw new HttpException(
        'Album already exist in favorites',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async removeAlbum(albumId: string) {
    // return this.favoritesStorage.deleteAlbum(albumId);
    return await this.favoriteAlbumRepository.delete({ albumId });
  }

  async createTrack(trackId: string) {
    // return this.favoritesStorage.createTrack(trackId);
    const track = this.favoriteTrackRepository.create({ trackId });

    try {
      return await this.favoriteTrackRepository.save(track);
    } catch {
      throw new HttpException(
        'Track already exist in favorites',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async removeTrack(trackId: string) {
    // return this.favoritesStorage.deleteTrack(trackId);
    return await this.favoriteTrackRepository.delete({ trackId });
  }
}
