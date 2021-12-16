/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtPayLoad } from 'src/auth/jwt.strategy';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    data.senha = await bcrypt.hash(data.senha, 10); //estou criptografando a senha
    return await this.prisma.user.create({
      data: { ...data },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, info: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data: info });
  }

  async remove(id: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });;
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
    const senhaIgual = await bcrypt.compare(login.senha, user.senha);
    if(!senhaIgual){
      throw new HttpException("SENHA INVÁLIDA",HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async validateUser(payLoad: JwtPayLoad): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { email: payLoad.email } })

    if(!user) {
      throw new HttpException("Token inválido",HttpStatus.UNAUTHORIZED);
    }

    return user
  }
}
