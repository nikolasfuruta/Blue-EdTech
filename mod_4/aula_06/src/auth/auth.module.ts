/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtEstrategy } from './jwt.strategy';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: "jwt", property: "user", session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: { expiresIn: "300s" },
    }),
  ],
  providers: [AuthService, JwtEstrategy,UserService,PrismaService],
  controllers: [AuthController],
  exports: [AuthService,PassportModule, JwtModule],
})
export class AuthModule {}
