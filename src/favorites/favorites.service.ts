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
    const artistFavorites = await this.favoriteArtistRepository.find({
      relations: { artist: true },
    });
    const albumFavorites = await this.favoriteAlbumRepository.find({
      relations: { album: true },
    });
    const trackFavorites = await this.favoriteTrackRepository.find({
      relations: { track: true },
    });

    const artists = artistFavorites.map((item) => item.artist);
    const albums = albumFavorites.map((item) => item.album);
    const tracks = trackFavorites.map((item) => item.track);

    return { albums, artists, tracks };
  }

  async createArtist(artistId: string) {
    const artist = this.favoriteArtistRepository.create({ artistId });

    try {
      return await this.favoriteArtistRepository.save(artist);
    } catch {
      throw new HttpException(
        'Artist already exist in favorites',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async removeArtist(artistId: string) {
    return await this.favoriteArtistRepository.delete({ artistId });
  }

  async createAlbum(albumId: string) {
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
    return await this.favoriteAlbumRepository.delete({ albumId });
  }

  async createTrack(trackId: string) {
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
    return await this.favoriteTrackRepository.delete({ trackId });
  }
}
