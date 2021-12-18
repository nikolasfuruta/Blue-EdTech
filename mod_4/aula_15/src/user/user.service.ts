/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { user } from "@prisma/client"
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(info: CreateUserDto): Promise<user>{
    info.senha = await bcrypt.hash(info.senha, 12);
    return await this.prisma.user.create({ data: info });
  }

  async findAll(): Promise<user[]> {
    return await this.prisma.user.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // async update(id: number, updateUserDto: UpdateUserDto){
  //   return `This action updates a #${id} user`;
  // }

  async remove(id: number): Promise<user> {
    return await this.prisma.user.delete({ where: { id } });
  }

  //MÉTODOS PARA AUTENTICAÇÃO

  async findByEmail(info): Promise<user> {
    return await this.prisma.user.findFirst({ where: { email: info} })
  }
}
