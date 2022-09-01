import { AppError } from "../../../errors/AppError";
import { CompaniePrismaRepository } from "../repositories/CompaniePrismaRepository";
import { CompanieCreateOrUpdate } from "../repositories/ICompanieRepository";

class CompanieUpdateService {
    constructor(private companiePrismaRepository: CompaniePrismaRepository) { }

    async execute(data: CompanieCreateOrUpdate, id: number) {
        if (!await this.companiePrismaRepository.findById(id)) {
            throw new AppError("Empresa não encontrada", 404);
        }

        const companieUpdated = await this.companiePrismaRepository.update(data, id);

        return companieUpdated;
    }
}

export { CompanieUpdateService };