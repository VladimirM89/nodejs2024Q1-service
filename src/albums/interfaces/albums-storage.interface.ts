import { CreateAlbumDto } from "../dto/create-album.dto";
import { UpdateAlbumDto } from "../dto/update-album.dto";
import { Album } from "../entities/album.entity";

export interface AlbumsStorage {
  create(createAlbumDto: CreateAlbumDto): Album;
  findAll(): Array<Album>;
  findOne(id: string): Album | undefined;
  update(id: string, updateAlbumDto: UpdateAlbumDto): Album;
  remove(id: string): void;
}
