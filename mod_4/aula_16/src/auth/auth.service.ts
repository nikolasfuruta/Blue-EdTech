/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt'
import { JwtPayLoad } from './jwt-strategy';

@Injectable()
export class AuthService {
    constructor(
        private  userService: UserService,
        private  jwtService: JwtService
    ) {}

    async login(payLoad: LoginDto) {
        const user = await this.userService.findByNomeEmail( payLoad );
        if(!user) {
            throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
        }

        const senhaValida = await bcrypt.compare(payLoad.senha, user.senha);
        if(!senhaValida) {
            throw new HttpException("Senha inválido", HttpStatus.UNAUTHORIZED);
        }

        const token = this.gerarToken(payLoad);
        return { nome: user.nome, ...token };
    }

    private gerarToken(payLoad: LoginDto) {
        const {nome, email, idade}: JwtPayLoad = payLoad;
        const accessToken = this.jwtService.sign({ nome, email, idade });
        return {expiresIn: process.env.EXPIRESIN, accessToken };
    }
}
