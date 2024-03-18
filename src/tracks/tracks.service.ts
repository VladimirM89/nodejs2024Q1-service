import { Inject, Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TracksStorage } from './interfaces/tracks-storage.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from './entities/track.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TracksService {
  constructor(
    @Inject('TracksStorage') private readonly tracksStorage: TracksStorage,
    @InjectRepository(Track) private trackRepository: Repository<Track>,
  ) {}

  create(createTrackDto: CreateTrackDto): Promise<Track> {
    // return this.tracksStorage.create(createTrackDto);
    return this.trackRepository.save(createTrackDto);
  }

  findAll(): Promise<Array<Track>> {
    // return this.tracksStorage.findAll();
    return this.trackRepository.find();
  }

  findOne(id: string): Promise<Track | null> {
    // return this.tracksStorage.findOne(id);
    return this.trackRepository.findOneBy({ id });
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    // return this.tracksStorage.update(id, updateTrackDto);
    this.trackRepository.save(updateTrackDto);

    return { id, ...updateTrackDto };
  }

  remove(id: string) {
    // return this.tracksStorage.remove(id);
    return this.trackRepository.delete(id);
  }

  //TODO: refactor
  removeArtistFromTrack(artistId: string) {
    return this.tracksStorage.removeArtist(artistId);
  }

  removeAlbumFromTrack(albumId: string) {
    return this.tracksStorage.removeAlbum(albumId);
  }
}
