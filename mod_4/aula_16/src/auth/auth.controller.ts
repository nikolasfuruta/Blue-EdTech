/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    login(@Body() payLoad: LoginDto){
        return this.authService.login(payLoad)
    }

    @Get()
    @UseGuards(AuthGuard())
    checkLogin() {
        return "LOGADO"
    }

}
