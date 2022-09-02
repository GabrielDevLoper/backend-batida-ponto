
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUpdateUserRequestDTO } from "./UpdateUserDTO";

class UpdateUserService {
    constructor(private userRepository: IUserRepository) { };

    async execute(data: IUpdateUserRequestDTO, id: number) {
        const userAlreadyExists = await this.userRepository.findById(id);

        if (!userAlreadyExists) {
            throw new AppError("Usuário não encontrado.", 404);
        }

        const user = await this.userRepository.update(data, id);

        return user;
    }
}

export { UpdateUserService }