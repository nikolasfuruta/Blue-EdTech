import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsNumber()
  @IsNotEmpty()
  duracao: number;
}
