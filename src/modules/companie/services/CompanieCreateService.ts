import { AppError } from "../../../errors/AppError";
import { CompaniePrismaRepository } from "../repositories/CompaniePrismaRepository";
import { CompanieCreateOrUpdate } from "../repositories/ICompanieRepository";

class CompanieCreateService {
    constructor(private companiePrismaRepository: CompaniePrismaRepository) { }

    async execute(data: CompanieCreateOrUpdate) {
        if (await this.companiePrismaRepository.findByCNPJ(data.cnpj)) {
            throw new AppError("CNPJ já utilizado.", 400);
        }

        const companie = await this.companiePrismaRepository.save(data);

        return companie;
    }
}

export { CompanieCreateService };