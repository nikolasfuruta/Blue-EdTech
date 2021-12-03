/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {

  constructor(private prisma:PrismaService){}
  

  create(info: CreateFilmeDto) {
    return this.prisma.filmes.create({data: info});
  }

  findAll() {
    return this.prisma.filmes.findMany({});
  }

  findOne(id: number) {
    return this.prisma.filmes.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, info: UpdateFilmeDto) {
    return this.prisma.filmes.update({
      where: {
        id: id,
      },
      data: info
    });
  }

  remove(id: number) {
    return this.prisma.filmes.delete({
      where: {
        id: id
      }
    });
  }
}
