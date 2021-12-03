import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [FilmesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
