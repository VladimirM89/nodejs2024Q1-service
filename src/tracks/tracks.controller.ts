import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  HttpException,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { TracksService } from './tracks.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';

@Controller('track')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.tracksService.create(createTrackDto);
  }

  @Get()
  findAll() {
    return this.tracksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const track = await this.tracksService.findOne(id);

    if (!track) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }

    return this.tracksService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateTrackDto: UpdateTrackDto,
  ) {
    const track = await this.tracksService.findOne(id);

    if (!track) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }

    return this.tracksService.update(id, updateTrackDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    const track = await this.tracksService.findOne(id);

    if (!track) {
      throw new HttpException('Track not found', HttpStatus.NOT_FOUND);
    }

    return this.tracksService.remove(id);
  }
}
