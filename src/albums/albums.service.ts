import { Inject, Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumsStorage } from './interfaces/albums-storage.interface';
import { TracksService } from 'src/tracks/tracks.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumsService {
  constructor(
    @Inject('AlbumsStorage') private albumsStorage: AlbumsStorage,
    @InjectRepository(Album) private albumRepository: Repository<Album>,
    private readonly tracksService: TracksService,
  ) {}

  create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    // return this.albumsStorage.create(createAlbumDto);
    return this.albumRepository.save(createAlbumDto);
  }

  findAll(): Promise<Array<Album>> {
    // return this.albumsStorage.findAll();
    return this.albumRepository.find();
  }

  findOne(id: string): Promise<Album | null> {
    // return this.albumsStorage.findOne(id);
    return this.albumRepository.findOneBy({ id });
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    // return this.albumsStorage.update(id, updateAlbumDto);
    this.albumRepository.save(updateAlbumDto);

    return { id, ...updateAlbumDto };
  }

  remove(id: string) {
    this.tracksService.removeAlbumFromTrack(id);
    // return this.albumsStorage.remove(id);
    return this.albumRepository.delete(id);
  }

  removeArtistFromAlbum(artistId: string) {
    return this.albumsStorage.removeArtist(artistId);
  }
}
