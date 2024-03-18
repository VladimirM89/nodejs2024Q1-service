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
import { validate as uuidValidate } from 'uuid';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  findAll() {
    return this.favoritesService.findAll();
  }

  @Post('track/:id')
  createTrack(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const isTrackAdded = this.favoritesService.createTrack(id);

    if (!isTrackAdded) {
      throw new HttpException(
        'Track not exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  @Delete('track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeTrack(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const isTrackDeleted = this.favoritesService.removeTrack(id);

    if (!isTrackDeleted) {
      throw new HttpException(
        'This track is not in favorite',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post('artist/:id')
  createArtist(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const isArtistAdded = this.favoritesService.createArtist(id);

    if (!isArtistAdded) {
      throw new HttpException(
        'Artist already exist in favorites',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return this.favoritesService.createArtist(id);
  }

  @Delete('artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeArtist(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const isArtistDeleted = this.favoritesService.removeArtist(id);

    if (!isArtistDeleted) {
      throw new HttpException(
        'This track is not in favorite',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post('album/:id')
  createAlbum(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const isAlbumAdded = this.favoritesService.createAlbum(id);

    if (!isAlbumAdded) {
      throw new HttpException(
        'Album already exist in favorites',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  @Delete('album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAlbum(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const isAlbumDeleted = this.favoritesService.removeAlbum(id);

    if (!isAlbumDeleted) {
      throw new HttpException(
        'This track is not in favorite',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
