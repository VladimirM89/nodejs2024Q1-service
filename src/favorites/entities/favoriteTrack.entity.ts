import { Track } from 'src/tracks/entities/track.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FavoriteTrack {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'track_id' })
  trackId: string | null;

  @ManyToOne(() => Track, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'track_id', referencedColumnName: 'id' })
  track: Track;
}
