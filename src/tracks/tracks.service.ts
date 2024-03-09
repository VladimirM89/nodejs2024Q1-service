import { Inject, Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TracksStorage } from './interfaces/tracks-storage.interface';

@Injectable()
export class TracksService {
  constructor(@Inject('TracksStorage') private readonly tracksStorage: TracksStorage) {}

  create(createTrackDto: CreateTrackDto) {
    return this.tracksStorage.create(createTrackDto);
  }

  findAll() {
    return this.tracksStorage.findAll();
  }

  findOne(id: string) {
    return this.tracksStorage.findOne(id);
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return this.tracksStorage.update(id, updateTrackDto);
  }

  remove(id: string) {
    return this.tracksStorage.remove(id);
  }
}
