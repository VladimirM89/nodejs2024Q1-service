import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { AlbumsService } from 'src/albums/albums.service';
import { TracksService } from 'src/tracks/tracks.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './entities/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist) private artistRepository: Repository<Artist>,

    private readonly albumsService: AlbumsService,
    private readonly tracksService: TracksService,
  ) {}

  create(createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.artistRepository.save(createArtistDto);
  }

  findAll(): Promise<Array<Artist>> {
    return this.artistRepository.find();
  }

  findOne(id: string): Promise<Artist | null> {
    return this.artistRepository.findOneBy({ id });
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    this.artistRepository.update(id, updateArtistDto);

    return { id, ...updateArtistDto };
  }

  remove(id: string) {
    //TODO: change after refactor tracksService and albumsService
    this.tracksService.removeArtistFromTrack(id);
    this.albumsService.removeArtistFromAlbum(id);

    return this.artistRepository.delete(id);
  }
}
