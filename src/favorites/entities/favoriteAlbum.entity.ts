import { Album } from 'src/albums/entities/album.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class FavoriteAlbum {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'album_id' })
  albumId: string | null;

  @ManyToOne(() => Album, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'album_id', referencedColumnName: 'id' })
  album: Album;
}
