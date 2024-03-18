import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from './entities/track.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track) private trackRepository: Repository<Track>,
  ) {}

  create(createTrackDto: CreateTrackDto): Promise<Track> {
    return this.trackRepository.save(createTrackDto);
  }

  findAll(): Promise<Array<Track>> {
    return this.trackRepository.find();
  }

  findOne(id: string): Promise<Track | null> {
    return this.trackRepository.findOneBy({ id });
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    this.trackRepository.save(updateTrackDto);

    return { id, ...updateTrackDto };
  }

  remove(id: string) {
    return this.trackRepository.delete(id);
  }
}
