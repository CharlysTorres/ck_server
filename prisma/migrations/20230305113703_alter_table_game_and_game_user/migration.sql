/*
  Warnings:

  - Added the required column `gameId` to the `GameUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameUser" ADD COLUMN     "gameId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "GameUser" ADD CONSTRAINT "GameUser_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
