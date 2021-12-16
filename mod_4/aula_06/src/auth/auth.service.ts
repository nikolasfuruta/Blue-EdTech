/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayLoad } from './jwt.strategy'

//classe de autenticação dos dados
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  //caso efetue o login, gera um token
  async login(loginUserDto: LoginDto) {
    const user = await this.userService.findByLogin(loginUserDto); //importo a função do USER

    const token = this._createToken(user) //aqui é onde coloco o parâmetro email

    return {
      email: user.email,
      ...token
    };
  }
  
  //Ao apertar 'Crtl + . ' em cima do '_createToken', vai aparecer a opção de construir a função
  private _createToken({ email }: LoginDto) {
    const user: JwtPayLoad = { email };
    const accesToken = this.jwtService.sign(user);

    return {
      expiresIn: process.env.EXPIRESIN,
      accesToken,
    };
  }
}
