import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TracksModule } from 'src/tracks/tracks.module';
import { Album } from './entities/album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
  imports: [TracksModule, TypeOrmModule.forFeature([Album])],
  exports: [AlbumsService],
})
export class AlbumsModule {}
