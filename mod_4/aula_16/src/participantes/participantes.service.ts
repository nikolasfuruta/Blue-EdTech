/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaService) {}
  
  create(createParticipanteDto: CreateParticipanteDto) {
    return 'This action adds a new participante';
  }

  findAll() {
    return `This action returns all participantes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} participante`;
  }

  update(id: number, updateParticipanteDto: UpdateParticipanteDto) {
    return `This action updates a #${id} participante`;
  }

  remove(id: number) {
    return `This action removes a #${id} participante`;
  }
}
