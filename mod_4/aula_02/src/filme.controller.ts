/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FilmeModule } from "./filme.module";

@Controller('filmes')
export class FilmeController {

    filmesMemoria:FilmeModule[] = [
        new FilmeModule(1,'Filme1','url01'),
        new FilmeModule(2,'Filme2','url02'),
        new FilmeModule(3,'Filme3','url03'),
    ]

    @Get('listall')
    listarTodos(): FilmeModule[] {
        return this.filmesMemoria
    }

    @Get('listid/:id')
    listaUm(@Param() params): FilmeModule {
        return this.filmesMemoria[parseInt(params.id)-1];
    }

    @Post('add')
    adicionar(@Body() filme): FilmeModule[] {
        this.filmesMemoria.push(filme);
        return this.filmesMemoria;
    }

    @Delete('delete')
    deletar(): string {
        this.filmesMemoria.pop()
        return 'Deletado com sucesso'
    }

    @Put('update/:id')
    alterar(@Param() params, @Body() info):FilmeModule {
        this.filmesMemoria[parseInt(params.id)-1] = info;
        return this.filmesMemoria[parseInt(params.id)-1]
    }
}