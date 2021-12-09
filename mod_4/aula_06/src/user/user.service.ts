/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    data.senha = await bcrypt.hash(data.senha, 10); //estou criptografando a senha
    return await this.prisma.user.create({
      data: { ...data },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  /*Essa função eu criei para ser usada no auth junto com JWT*/
  async findByLogin(login: CreateUserDto): Promise<User>{
    const user = await this.prisma.user.findFirst(
      {
        where: {
          email: login.email,
        },
      },
    );
    
    if(!user){
      throw new HttpException("USUARIO NÃO ENCONTRADO",HttpStatus.NOT_FOUND);
    }
    const senhaIgual = await bcrypt.compare(login.senha,user.senha);
    if(!senhaIgual){
      throw new HttpException("SENHA INVÁLIDA",HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
