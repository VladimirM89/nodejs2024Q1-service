import { Artist } from 'src/artists/entities/artist.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid v4

  @Column()
  name: string;

  @Column()
  year: number;

  @Column({ name: 'artist_id', nullable: true })
  artistId: string | null; // refers to Artist

  @ManyToOne(() => Artist, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'artist_id', referencedColumnName: 'id' })
  artist: Artist;
}
