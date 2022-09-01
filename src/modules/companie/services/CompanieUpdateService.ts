import { AppError } from "../../../errors/AppError";
import { CompanieCreateOrUpdate, ICompanieRepository } from "../repositories/ICompanieRepository";

class CompanieUpdateService {
    constructor(private companieRepository: ICompanieRepository) { }

    async execute(data: CompanieCreateOrUpdate, id: number) {
        if (!await this.companieRepository.findById(id)) {
            throw new AppError("Empresa não encontrada", 404);
        }

        const companieUpdated = await this.companieRepository.update(data, id);

        return companieUpdated;
    }
}

export { CompanieUpdateService };