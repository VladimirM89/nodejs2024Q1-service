import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
// import { InMemoryUsersStorage } from './storage/in-memory.users.storage';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    // {
    //   provide: 'UsersStorage',
    //   useClass: InMemoryUsersStorage,
    // },
  ],
})
export class UsersModule {}
