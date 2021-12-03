/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post('add')
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmesService.create(createFilmeDto);
  }

  @Get('listall')
  findAll() {
    return this.filmesService.findAll();
  }

  @Get('listid/:id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.update(+id, updateFilmeDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
