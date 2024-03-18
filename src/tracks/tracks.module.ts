import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { InMemoryTracksStorage } from './storage/in-memory.tracks.storage';
import { Track } from './entities/track.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TracksController],
  providers: [
    TracksService,
    {
      provide: 'TracksStorage',
      useClass: InMemoryTracksStorage,
    },
  ],
  imports: [TypeOrmModule.forFeature([Track])],
  exports: [TracksService],
})
export class TracksModule {}
