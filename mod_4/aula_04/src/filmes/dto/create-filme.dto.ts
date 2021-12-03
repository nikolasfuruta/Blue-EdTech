import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  capa: string;

  @IsNotEmpty()
  @IsString()
  sinopse: string;
}
