import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FilmeModule } from './filme/filme.module';
import { ParticipanteModule } from './participante/participante.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, FilmeModule, ParticipanteModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
