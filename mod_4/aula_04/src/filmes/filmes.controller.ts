/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post('add')
  async create(@Body() info: CreateFilmeDto){
    return await this.filmesService.create(info);
  }

  @Get('listall')
  async findAll() {
    return await this.filmesService.findAll();
  }

  @Get('listid/:id')
  async findOne(@Param('id') id: string) {
    return await this.filmesService.findOne(+id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() info: UpdateFilmeDto) {
    return await this.filmesService.update(+id, info);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.filmesService.remove(+id);
  }
}
