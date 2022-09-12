-- CreateTable
CREATE TABLE "Veiculos" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL DEFAULT '#',
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Veiculos_pkey" PRIMARY KEY ("id")
);
