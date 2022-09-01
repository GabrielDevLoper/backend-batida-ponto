export interface CompanieCreateOrUpdate {
    corporate_name: string;
    cnpj: string;
    contact_number?: string;
}

export interface Companie {
    id: number;
    corporate_name: string;
    cnpj: string;
}

export interface ICompanyRepository {
    save(data: CompanieCreateOrUpdate): Promise<Companie>;
    findByCNPJ(cnpj: string): Promise<Companie | null>;
    findAll(): Promise<Companie[] | null>;
    findById(id: number): Promise<Companie | null>;
    update(data: CompanieCreateOrUpdate, id: number): Promise<Companie>;
    delete(id: number): Promise<Companie>;
}