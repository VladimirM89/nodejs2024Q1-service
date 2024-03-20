import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { ArtistsModule } from 'src/artists/artists.module';
import { AlbumsModule } from 'src/albums/albums.module';
import { TracksModule } from 'src/tracks/tracks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteTrack } from './entities/favoriteTrack.entity';
import { FavoriteArtist } from './entities/favoriteArtist.entity';
import { FavoriteAlbum } from './entities/favoriteAlbum.entity';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [
    ArtistsModule,
    AlbumsModule,
    TracksModule,
    TypeOrmModule.forFeature([FavoriteArtist, FavoriteAlbum, FavoriteTrack]),
  ],
})
export class FavoritesModule {}
