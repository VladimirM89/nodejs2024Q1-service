import { Album } from 'src/albums/entities/album.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Track } from 'src/tracks/entities/track.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  artistId: string | null;

  @ManyToOne(() => Artist, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'artist_id', referencedColumnName: 'id' })
  artist: Artist;

  @Column({ name: 'album_id' })
  albumId: string | null;

  @ManyToOne(() => Album, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'album_id', referencedColumnName: 'id' })
  album: Album;

  @Column({ name: 'track_id' })
  trackId: string | null;

  @ManyToOne(() => Track, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'track_id', referencedColumnName: 'id' })
  track: Track;
}
