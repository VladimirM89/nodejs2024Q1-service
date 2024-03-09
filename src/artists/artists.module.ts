import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { InMemoryArtistsStorage } from './storage/in-memory.artists.storage';
import { AlbumsModule } from 'src/albums/albums.module';

@Module({
  controllers: [ArtistsController],
  providers: [
    ArtistsService,
    {
      provide: 'ArtistsStorage',
      useClass: InMemoryArtistsStorage,
    },
  ],
  imports: [AlbumsModule]
})
export class ArtistsModule {}
