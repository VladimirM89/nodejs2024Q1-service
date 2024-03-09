import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { InMemoryArtistsStorage } from './storage/in-memory.artists.storage';
import { AlbumsModule } from 'src/albums/albums.module';
import { TracksModule } from 'src/tracks/tracks.module';

@Module({
  controllers: [ArtistsController],
  providers: [
    ArtistsService,
    {
      provide: 'ArtistsStorage',
      useClass: InMemoryArtistsStorage,
    },
  ],
  imports: [AlbumsModule, TracksModule],
})
export class ArtistsModule {}
