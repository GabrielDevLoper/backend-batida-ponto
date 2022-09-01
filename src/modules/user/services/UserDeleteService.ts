import { AppError } from "../../../errors/AppError";
import { IUserRepository } from "../repositories/IUserRepository";

class UserDeleteService {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number) {
        if (!await this.userRepository.findById(id)) {
            throw new AppError("Usuário não encontrado", 404);
        }

        const userDeleted = await this.userRepository.delete(id);

        return userDeleted;
    }
}

export { UserDeleteService };