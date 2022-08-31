import { AppError } from "../../../errors/AppError";
import { UserCreateOrUpdate } from "../repositories/IUserRepository";
import { UserPrismaRepository } from "../repositories/UserPrismaRepository";

class UserUpdateService {
    constructor(private userPrismaRepository: UserPrismaRepository) { }

    async execute(data: UserCreateOrUpdate, id: number) {
        if (!await this.userPrismaRepository.findById(id)) {
            throw new AppError("Usuário não encontrado.", 404);
        }

        const user = await this.userPrismaRepository.update(data, id);

        return user;
    }
}

export { UserUpdateService }