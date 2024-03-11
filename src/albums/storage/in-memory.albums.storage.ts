import { Injectable } from '@nestjs/common';
import { AlbumsStorage } from '../interfaces/albums-storage.interface';
import { Album } from '../entities/album.entity';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InMemoryAlbumsStorage implements AlbumsStorage {
  private albums: Array<Album> = [];

  constructor() {
    this.albums = [];
  }

  create(createAlbumDto: CreateAlbumDto): Album {
    const { name, year, artistId } = createAlbumDto;
    const newAlbum: Album = {
      id: uuidv4(),
      name,
      year,
      artistId,
    };

    this.albums.push(newAlbum);
    return newAlbum;
  }

  findAll(): Album[] {
    return this.albums;
  }

  findOne(id: string): Album {
    return this.albums.find((album) => album.id === id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto): Album {
    const album = this.findOne(id);
    const index = this.albums.indexOf(album);
    const updatedAlbum: Album = {
      ...album,
      ...updateAlbumDto,
    };

    this.albums.splice(index, 1, updatedAlbum);
    return updatedAlbum;
  }

  remove(id: string): void {
    const album = this.findOne(id);
    const index = this.albums.indexOf(album);
    this.albums.splice(index, 1);
  }

  removeArtist(artistId: string): void {
    this.albums.map((album) => {
      if (album.artistId === artistId) {
        album.artistId = null;
      }
    });
  }
}
