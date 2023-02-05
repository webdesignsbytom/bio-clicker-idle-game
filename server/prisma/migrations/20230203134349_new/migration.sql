/*
  Warnings:

  - You are about to drop the `Building` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GameProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameProfile" DROP CONSTRAINT "GameProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_gameProfileId_fkey";

-- DropTable
DROP TABLE "Building";

-- DropTable
DROP TABLE "GameProfile";

-- DropTable
DROP TABLE "Item";
