import { prismaClient } from "../../../database/prismaClient";
import { Companie, CompanieCreateOrUpdate, ICompanyRepository } from "./ICompanieRepository";

class CompaniePrismaRepository implements ICompanyRepository {
    save(data: CompanieCreateOrUpdate): Promise<Companie> {
        const companie = prismaClient.companie.create({
            data
        });

        return companie;
    }
    findByCNPJ(cnpj: string): Promise<Companie | null> {
        const companie = prismaClient.companie.findUnique({
            where: {
                cnpj
            }
        });

        return companie;
    }
    findAll(): Promise<Companie[] | null> {
        const companies = prismaClient.companie.findMany();

        return companies;
    }
    findById(id: number): Promise<Companie | null> {
        const companie = prismaClient.companie.findUnique({
            where: {
                id
            }
        });

        return companie;
    }
    update(data: CompanieCreateOrUpdate, id: number): Promise<Companie> {
        const companie = prismaClient.companie.update({
            where: {
                id
            },
            data
        });

        return companie;
    }
    delete(id: number): Promise<Companie> {
        const companie = prismaClient.companie.delete({
            where: {
                id
            },
        });

        return companie;
    }
}

export { CompaniePrismaRepository };