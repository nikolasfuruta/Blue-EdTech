/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

//classe responsável pela autenticação do Token
//O proprio jwt se encarrega de chamar e usar ele

export interface JwtPayload {
    email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    authService: any;
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRETKEY,
        })
    }

    validate(payload: JwtPayload) { //sem esse método, o checkLogin não funciona 
        return payload;
    }
}
