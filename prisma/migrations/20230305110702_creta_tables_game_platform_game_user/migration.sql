/*
  Warnings:

  - Added the required column `studio` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "studio" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "GameUser" (
    "id" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GameUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refreshToken" (
    "id" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "refreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameUser_tagId_key" ON "GameUser"("tagId");

-- CreateIndex
CREATE UNIQUE INDEX "refreshToken_userId_key" ON "refreshToken"("userId");

-- AddForeignKey
ALTER TABLE "GameUser" ADD CONSTRAINT "GameUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refreshToken" ADD CONSTRAINT "refreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
