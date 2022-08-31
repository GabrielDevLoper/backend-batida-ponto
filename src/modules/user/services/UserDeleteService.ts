import { AppError } from "../../../errors/AppError";
import { UserPrismaRepository } from "../repositories/UserPrismaRepository";

class UserDeleteService {
    constructor(private userPrismaRepository: UserPrismaRepository) { }

    async execute(id: number) {
        if (!await this.userPrismaRepository.findById(id)) {
            throw new AppError("Usuário não encontrado", 404);
        }

        const userDeleted = await this.userPrismaRepository.delete(id);

        return userDeleted;
    }
}

export { UserDeleteService };