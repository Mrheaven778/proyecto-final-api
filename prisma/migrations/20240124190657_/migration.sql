-- CreateTable
CREATE TABLE "Champion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "lane" TEXT NOT NULL,
    "attackType" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "lore" TEXT NOT NULL,

    CONSTRAINT "Champion_pkey" PRIMARY KEY ("id")
);
