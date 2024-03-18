import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album) private albumRepository: Repository<Album>,
  ) {}

  create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumRepository.save(createAlbumDto);
  }

  findAll(): Promise<Array<Album>> {
    return this.albumRepository.find();
  }

  findOne(id: string): Promise<Album | null> {
    return this.albumRepository.findOneBy({ id });
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    this.albumRepository.save(updateAlbumDto);

    return { id, ...updateAlbumDto };
  }

  remove(id: string) {
    return this.albumRepository.delete(id);
  }
}
