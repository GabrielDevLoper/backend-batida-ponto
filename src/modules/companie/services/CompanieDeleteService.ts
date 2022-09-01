import { AppError } from "../../../errors/AppError";
import { CompaniePrismaRepository } from "../repositories/CompaniePrismaRepository";

class CompanieDeleteService {
    constructor(private companiePrismaRepository: CompaniePrismaRepository) { }

    async execute(id: number) {
        if (!await this.companiePrismaRepository.findById(id)) {
            throw new AppError("Empresa não encontrada", 404);
        }

        const companieDeleted = await this.companiePrismaRepository.delete(id);

        return companieDeleted;
    }
}

export { CompanieDeleteService };