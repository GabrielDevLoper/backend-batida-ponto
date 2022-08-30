/*
  Warnings:

  - You are about to drop the column `contact_numer` on the `companies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "contact_numer",
ADD COLUMN     "contact_number" TEXT;
