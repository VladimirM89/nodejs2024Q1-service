import { Injectable } from "@nestjs/common";
import { ArtistsStorage } from "../interfaces/artists-storage.interface";
import { Artist } from "../entities/artist.entity";
import { CreateArtistDto } from "../dto/create-artist.dto";
import { UpdateArtistDto } from "../dto/update-artist.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InMemoryArtistsStorage implements ArtistsStorage {
  private artists: Array<Artist>;

  constructor() {
    this.artists = [];
  }

  create(createArtistDto: CreateArtistDto): Artist {
    const { name, grammy } = createArtistDto;
    const newArtist: Artist = {
      id: uuidv4(),
      name,
      grammy,
    };

    this.artists.push(newArtist);
    return newArtist;
  }

  findAll(): Array<Artist> {
    return this.artists;
  }

  findOne(id: string): Artist | undefined {
    return this.artists.find((artist) => artist.id === id);
  }

  update(id: string, updateArtistDto: UpdateArtistDto): Artist {
    const artist = this.findOne(id);
    const index = this.artists.indexOf(artist);
    const updatedArtist: Artist = {
      ...artist,
      ...updateArtistDto
    };

    this.artists.splice(index, 1, updatedArtist);
    return updatedArtist;
  }

  remove(id: string): void {
    const artist = this.findOne(id);
    const index = this.artists.indexOf(artist);
    this.artists.splice(index, 1);
  };
}