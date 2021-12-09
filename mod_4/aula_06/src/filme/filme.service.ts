import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return await this.prisma.filme.create({ data });
  }

  async findAll(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOne(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, data: UpdateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Filme> {
    return await this.prisma.filme.delete({ where: { id } });
  }
}
