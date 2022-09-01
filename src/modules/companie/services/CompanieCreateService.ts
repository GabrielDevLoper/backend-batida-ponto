import { AppError } from "../../../errors/AppError";
import { CompaniePrismaRepository } from "../repositories/CompaniePrismaRepository";
import { CompanieCreateOrUpdate, ICompanieRepository } from "../repositories/ICompanieRepository";

class CompanieCreateService {
    constructor(private companieRepository: ICompanieRepository) { }

    async execute(data: CompanieCreateOrUpdate) {
        if (await this.companieRepository.findByCNPJ(data.cnpj)) {
            throw new AppError("CNPJ já utilizado.", 400);
        }

        const companie = await this.companieRepository.save(data);

        return companie;
    }
}

export { CompanieCreateService };