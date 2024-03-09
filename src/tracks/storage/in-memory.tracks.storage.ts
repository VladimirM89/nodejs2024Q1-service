import { Injectable } from "@nestjs/common";
import { TracksStorage } from "../interfaces/tracks-storage.interface";
import { Track } from "../entities/track.entity";
import { CreateTrackDto } from "../dto/create-track.dto";
import { UpdateTrackDto } from "../dto/update-track.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InMemoryTracksStorage implements TracksStorage {
  private tracks: Array<Track>;

  constructor() {
    this.tracks = [];
  }

  create(createTrackDto: CreateTrackDto): Track {
    const { albumId, artistId, duration, name } = createTrackDto;
    const newTrack: Track = {
      id: uuidv4(),
      name,
      duration,
      albumId: albumId,
      artistId: artistId,
    };

    this.tracks.push(newTrack);
    return newTrack;
  }

  findAll(): Track[] {
    return this.tracks;
  }

  findOne(id: string): Track {
    return this.tracks.find((track) => track.id === id);
  }

  update(id: string, updateTrackDto: UpdateTrackDto): Track {
    const track = this.findOne(id);
    const index = this.tracks.indexOf(track);
    const updatedTrack: Track = {
      ...track,
      ...updateTrackDto,
    };

    this.tracks.splice(index, 1, updatedTrack);
    return updatedTrack;
  }

  remove(id: string): void {
    const track = this.findOne(id);
    const index = this.tracks.indexOf(track);
    this.tracks.splice(index, 1);
  }

  removeArtist(artistId: string): void {
    this.tracks.map((track) => {
      if (track.artistId === artistId) {
        track.artistId = null;
      }
    })
  }

  removeAlbum(albumId: string): void {
    this.tracks.map((track) => {
      if (track.albumId === albumId) {
        track.albumId = null;
      }
    })
  }
};