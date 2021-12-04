/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post('add')
  create(@Body() info: CreateFilmeDto){
    return this.filmesService.create(info);
  }

  @Get('listall')
  findAll() {
    return this.filmesService.findAll();
  }

  @Get('listid/:id')
  async findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id).catch((err)=>{
      throw new NotFoundException(err.message)
    });
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() info: UpdateFilmeDto) {
    return this.filmesService.update(+id, info);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
