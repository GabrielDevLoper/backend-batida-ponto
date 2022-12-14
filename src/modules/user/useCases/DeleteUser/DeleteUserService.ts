import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

export class DeleteUserService {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number) {
        const userAlreadyExists = await this.userRepository.findById(id);

        if (!userAlreadyExists) {
            throw new AppError("Usuário não encontrado.", 404);
        }

        const user = await this.userRepository.delete(id);

        return user;
    }
}