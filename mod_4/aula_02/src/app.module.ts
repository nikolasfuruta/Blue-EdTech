import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmeController } from './filme.controller';

@Module({
  imports: [],
  controllers: [AppController, FilmeController],
  providers: [AppService],
})
export class AppModule {}
