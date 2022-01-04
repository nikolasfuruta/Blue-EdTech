/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'
import { LoginDto } from 'src/auth/dto/auth.dto';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(data: CreateUserDto): Promise<User> {
    data.senha = await bcrypt.hash(data.senha, 12);
    return await this.prisma.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

//   async findOne(id: number): Promise<User> {
//     return await this.prisma.user;
//   }

//   async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
//     return await this.prisma.user;
//   }

//   async remove(id: number): Promise<User> {
//     return await this.prisma.user;
//   }

  async findByNomeEmail({ nome, email }: LoginDto): Promise<User> {
    return this.prisma.user.findFirst(
      { where: { AND: [ { nome: nome }, { email: email } ] } }
    )
  }
}
