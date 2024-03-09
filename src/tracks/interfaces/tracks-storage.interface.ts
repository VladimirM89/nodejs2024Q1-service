import { CreateTrackDto } from "../dto/create-track.dto";
import { UpdateTrackDto } from "../dto/update-track.dto";
import { Track } from "../entities/track.entity";

export interface TracksStorage {
  create(createTrackDto: CreateTrackDto): Track;
  findAll(): Array<Track>;
  findOne(id: string): Track | undefined;
  update(id: string, updatePasswordDto: UpdateTrackDto): Track;
  remove(id: string): void;
  removeArtist(artistId: string): void;
  removeAlbum(AlbumId: string): void;
}