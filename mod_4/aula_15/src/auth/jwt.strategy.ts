/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

//classe responsável pela autenticação do Token

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

    validate(payload: JwtPayload) {
        return payload;
    }
}
