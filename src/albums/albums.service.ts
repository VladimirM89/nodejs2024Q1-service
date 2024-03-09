import { Inject, Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumsStorage } from './interfaces/albums-storage.interface';

@Injectable()
export class AlbumsService {
  constructor(@Inject('AlbumsStorage') private albumsStorage: AlbumsStorage) {}

  create(createAlbumDto: CreateAlbumDto) {
    return this.albumsStorage.create(createAlbumDto);
  }

  findAll() {
    return this.albumsStorage.findAll();
  }

  findOne(id: string) {
    return this.albumsStorage.findOne(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.albumsStorage.update(id, updateAlbumDto);
  }

  remove(id: string) {
    return this.albumsStorage.remove(id);
  }
}
