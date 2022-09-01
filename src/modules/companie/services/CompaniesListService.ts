import { CompaniePrismaRepository } from "../repositories/CompaniePrismaRepository";


class CompaniesListService {
    constructor(private companiePrismaRepository: CompaniePrismaRepository) { }

    async execute() {
        const companies = await this.companiePrismaRepository.findAll();

        return companies;
    }
}

export { CompaniesListService };