-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN_GERAL', 'ADMIN_EMPRESA');

-- CreateTable
CREATE TABLE "adresses" (
    "id" SERIAL NOT NULL,
    "road" TEXT,
    "district" TEXT,
    "city" TEXT,
    "cep" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "corporate_name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "contact_numer" TEXT NOT NULL,
    "adress_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companie_id" INTEGER,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "admission_date" TIMESTAMP(3) NOT NULL,
    "pis" TEXT,
    "companie_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "record_digital_points" (
    "id" SERIAL NOT NULL,
    "registration" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "record_digital_points_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_cnpj_key" ON "companies"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "employees_registration_key" ON "employees"("registration");

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_adress_id_fkey" FOREIGN KEY ("adress_id") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_companie_id_fkey" FOREIGN KEY ("companie_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_companie_id_fkey" FOREIGN KEY ("companie_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record_digital_points" ADD CONSTRAINT "record_digital_points_registration_fkey" FOREIGN KEY ("registration") REFERENCES "employees"("registration") ON DELETE RESTRICT ON UPDATE CASCADE;
