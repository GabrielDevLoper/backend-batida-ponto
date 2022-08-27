-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_adress_id_fkey";

-- AlterTable
ALTER TABLE "companies" ALTER COLUMN "adress_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_adress_id_fkey" FOREIGN KEY ("adress_id") REFERENCES "adresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
