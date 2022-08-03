-- CreateTable
CREATE TABLE "allCar" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "allCar_pkey" PRIMARY KEY ("id")
);
