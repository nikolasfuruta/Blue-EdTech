import { Injectable } from '@nestjs/common';
import { Participante, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipanteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.ParticipanteCreateInput): Promise<Participante> {
    return this.prisma.participante.create({ data });
  }

  async findAll(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  async findOne(id: number): Promise<Participante> {
    return this.prisma.participante.findUnique({ where: { id } });
  }

  // eslint-disable-next-line prettier/prettier
  async update(id: number, data: Prisma.ParticipanteUpdateInput): Promise<Participante> {
    return this.prisma.participante.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Participante> {
    return this.prisma.participante.delete({ where: { id } });
  }
}
