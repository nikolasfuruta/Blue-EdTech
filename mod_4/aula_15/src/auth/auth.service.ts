/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtPayload } from './jwt.strategy';
import { LoginDto } from './dto/loginDto';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async login(info: LoginDto) {
        const user = await this.userService.findByEmail(info.email);
        if(!user) {
            throw new HttpException("USER NÃO ENCONTRADO", HttpStatus.NOT_FOUND);
        }

        const senhaValida = await bcrypt.compare(info.senha, user.senha);
        if(!senhaValida) {
            throw new HttpException("SENHA INVÁLIDA", HttpStatus.UNAUTHORIZED);
        }

        const token = this._createToken(user); //caso o usuario seja válido, gera o token
        return { email: user.email, ...token };
    }

    private _createToken({ email }: LoginDto) {
        const payLoad: JwtPayload = { email };
        const accessToken = this.jwtService.sign(payLoad);
        return {
            expiresIn: process.env.EXPIRESIN,
            accessToken
        }
    }
}
