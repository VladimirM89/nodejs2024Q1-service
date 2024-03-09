import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Put, HttpCode } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { validate as uuidValidate } from 'uuid';

@Controller('album')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumsService.create(createAlbumDto);
  }

  @Get()
  findAll() {
    return this.albumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!uuidValidate(id)) {
      throw new HttpException('Id is not uuid type', HttpStatus.BAD_REQUEST);
    }
    const album = this.albumsService.findOne(id);

    if (!album) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }

    return this.albumsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    if (!uuidValidate(id)) {
      throw new HttpException('Id is not uuid type', HttpStatus.BAD_REQUEST);
    }
    const album = this.albumsService.findOne(id);

    if (!album) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }

    return this.albumsService.update(id, updateAlbumDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    if (!uuidValidate(id)) {
      throw new HttpException('Id is not uuid type', HttpStatus.BAD_REQUEST);
    }
    const album = this.albumsService.findOne(id);

    if (!album) {
      throw new HttpException('Album not found', HttpStatus.NOT_FOUND);
    }

    return this.albumsService.remove(id);
  }
}
