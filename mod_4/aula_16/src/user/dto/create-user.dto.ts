/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto implements Prisma.UserUncheckedCreateInput {
    id?: number;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsInt()
    @IsNotEmpty()
    idade: number;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;
}
