import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { InMemoryAlbumsStorage } from './storage/in-memory.albums.storage';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService,
    {
      provide: 'AlbumsStorage',
      useClass: InMemoryAlbumsStorage,
    }
  ],
  exports: [AlbumsService]
})
export class AlbumsModule {}
