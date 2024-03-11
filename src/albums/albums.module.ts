import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { InMemoryAlbumsStorage } from './storage/in-memory.albums.storage';
import { TracksModule } from 'src/tracks/tracks.module';

@Module({
  controllers: [AlbumsController],
  providers: [
    AlbumsService,
    {
      provide: 'AlbumsStorage',
      useClass: InMemoryAlbumsStorage,
    },
  ],
  imports: [TracksModule],
  exports: [AlbumsService],
})
export class AlbumsModule {}
