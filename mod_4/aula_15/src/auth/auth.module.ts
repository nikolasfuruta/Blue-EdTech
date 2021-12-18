/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    UserModule,
    PassportModule.register(
      {
        defaultStrategy: "jwt",
        property: "user",
        session: false
      }
    ),
    JwtModule.register(
      {
        secret: process.env.SECRETKEY,
        signOptions: {
          expiresIn: "300s"
        }
      }
    ),
  ],
  controllers: [AuthController],
  providers: [UserService, PrismaService, AuthService, JwtStrategy],
  exports: [
    PassportModule,
    JwtModule
  ],
})
export class AuthModule {}
