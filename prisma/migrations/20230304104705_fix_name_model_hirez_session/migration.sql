/*
  Warnings:

  - You are about to drop the `hirezSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "hirezSession";

-- CreateTable
CREATE TABLE "hirez_session" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL,

    CONSTRAINT "hirez_session_pkey" PRIMARY KEY ("id")
);
