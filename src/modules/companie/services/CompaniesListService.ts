import { CompaniePrismaRepository } from "../repositories/CompaniePrismaRepository";
import { ICompanieRepository } from "../repositories/ICompanieRepository";


class CompaniesListService {
    constructor(private companieRepository: ICompanieRepository) { }

    async execute() {
        const companies = await this.companieRepository.findAll();

        return companies;
    }
}

export { CompaniesListService };