/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

export interface JwtPayLoad {
  email: string;
}

@Injectable()
export class JwtEstrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRETKEY
        });
    }

    validate( payLoad: JwtPayLoad) {
        return payLoad;
    }
}