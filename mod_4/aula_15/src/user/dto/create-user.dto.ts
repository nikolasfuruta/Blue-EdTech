/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";

export class CreateUserDto implements Prisma.userUncheckedCreateInput {
    id?: number;
    email: string;
    senha: string;
}
