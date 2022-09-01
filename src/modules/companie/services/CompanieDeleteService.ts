import { AppError } from "../../../errors/AppError";
import { ICompanieRepository } from "../repositories/ICompanieRepository";

class CompanieDeleteService {
    constructor(private companieRepository: ICompanieRepository) { }

    async execute(id: number) {
        if (!await this.companieRepository.findById(id)) {
            throw new AppError("Empresa não encontrada", 404);
        }

        const companieDeleted = await this.companieRepository.delete(id);

        return companieDeleted;
    }
}

export { CompanieDeleteService };