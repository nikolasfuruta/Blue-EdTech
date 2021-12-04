/* eslint-disable prettier/prettier */
import { Filmes } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {

  constructor(private prisma:PrismaService){}
  

  async create(info: CreateFilmeDto): Promise<Filmes> {
    return await this.prisma.filmes.create({data: info});
  }

  async findAll():Promise<Filmes[]> {
    return await this.prisma.filmes.findMany({});
  }

  async findOne(id: number): Promise<Filmes> { 
    return await this.prisma.filmes.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, info: UpdateFilmeDto): Promise<Filmes> {
    return await this.prisma.filmes.update({
      where: {
        id: id,
      },
      data: info
    });
  }

  async remove(id: number): Promise<Filmes> {
    return await this.prisma.filmes.delete({
      where: {
        id: id
      }
    });
  }
}
