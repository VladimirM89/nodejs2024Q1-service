import { Artist } from 'src/artists/entities/artist.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class FavoriteArtist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'artist_id' })
  artistId: string | null;

  @ManyToOne(() => Artist, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'artist_id', referencedColumnName: 'id' })
  artist: Artist;
}
