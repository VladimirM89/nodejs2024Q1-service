import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  HttpException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async findAll() {
    return await this.favoritesService.findAll();
  }

  @Post('track/:id')
  async createTrack(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const isTrackAdded = await this.favoritesService.createTrack(id);

    if (!isTrackAdded.trackId) {
      throw new HttpException(
        'Track not exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  @Delete('track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeTrack(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const isTrackDeleted = await this.favoritesService.removeTrack(id);

    if (!isTrackDeleted.affected) {
      throw new HttpException(
        'This track is not in favorite',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post('artist/:id')
  async createArtist(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return await this.favoritesService.createArtist(id);
  }

  @Delete('artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeArtist(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const isArtistDeleted = await this.favoritesService.removeArtist(id);

    if (!isArtistDeleted.affected) {
      throw new HttpException(
        'This track is not in favorite',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post('album/:id')
  async createAlbum(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return await this.favoritesService.createAlbum(id);
  }

  @Delete('album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeAlbum(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    const isAlbumDeleted = await this.favoritesService.removeAlbum(id);

    if (!isAlbumDeleted.affected) {
      throw new HttpException(
        'This track is not in favorite',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
