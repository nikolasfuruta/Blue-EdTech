-- CreateTable
CREATE TABLE "Filmes" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "capa" TEXT,
    "sinopse" TEXT,

    CONSTRAINT "Filmes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Filmes_titulo_key" ON "Filmes"("titulo");
