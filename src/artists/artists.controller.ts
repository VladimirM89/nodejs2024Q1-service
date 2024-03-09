import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { validate as uuidValidate } from 'uuid';

@Controller('artist')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!uuidValidate(id)) {
      throw new HttpException("Id is not uuid type", HttpStatus.BAD_REQUEST);
    }
    const artist = this.artistsService.findOne(id);

    if (!artist) {
      throw new HttpException("Artist not found", HttpStatus.NOT_FOUND);
    }
    
    return this.artistsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    if (!uuidValidate(id)) {
      throw new HttpException("Id is not uuid type", HttpStatus.BAD_REQUEST);
    }
    const artist = this.artistsService.findOne(id);

    if (!artist) {
      throw new HttpException("Artist not found", HttpStatus.NOT_FOUND);
    }

    return this.artistsService.update(id, updateArtistDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    if (!uuidValidate(id)) {
      throw new HttpException("Id is not uuid type", HttpStatus.BAD_REQUEST);
    }
    const artist = this.artistsService.findOne(id);

    if (!artist) {
      throw new HttpException("Artist not found", HttpStatus.NOT_FOUND);
    }

    return this.artistsService.remove(id);
  }
}
