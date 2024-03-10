import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { InMemoryFavoritesStorage } from './storage/in-memory.favorites.storage';
import { ArtistsModule } from 'src/artists/artists.module';
import { AlbumsModule } from 'src/albums/albums.module';
import { TracksModule } from 'src/tracks/tracks.module';

@Module({
  controllers: [FavoritesController],
  providers: [
    FavoritesService,
    {
      provide: 'FavoritesStorage',
      useClass: InMemoryFavoritesStorage,
    },
  ],
  imports: [ArtistsModule, AlbumsModule, TracksModule],
})
export class FavoritesModule {}
