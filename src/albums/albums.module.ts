import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { InMemoryAlbumsStorage } from './storage/in-memory.albums.storage';
import { TracksModule } from 'src/tracks/tracks.module';
import { Album } from './entities/album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AlbumsController],
  providers: [
    AlbumsService,
    {
      provide: 'AlbumsStorage',
      useClass: InMemoryAlbumsStorage,
    },
  ],
  imports: [TracksModule, TypeOrmModule.forFeature([Album])],
  exports: [AlbumsService],
})
export class AlbumsModule {}
