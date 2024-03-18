import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { InMemoryFavoritesStorage } from './storage/in-memory.favorites.storage';
import { ArtistsModule } from 'src/artists/artists.module';
import { AlbumsModule } from 'src/albums/albums.module';
import { TracksModule } from 'src/tracks/tracks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from './entities/favorite.entity';

@Module({
  controllers: [FavoritesController],
  providers: [
    FavoritesService,
    {
      provide: 'FavoritesStorage',
      useClass: InMemoryFavoritesStorage,
    },
  ],
  imports: [
    ArtistsModule,
    AlbumsModule,
    TracksModule,
    TypeOrmModule.forFeature([Favorite]),
  ],
})
export class FavoritesModule {}
