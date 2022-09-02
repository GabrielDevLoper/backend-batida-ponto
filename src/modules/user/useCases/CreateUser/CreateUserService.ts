import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../../../models/User";

export class CreateUserService {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByUserName(data.username);

        if (userAlreadyExists) {
            throw new AppError("Usuário já cadastrado na base.", 400);
        }

        const user = new User(data);
        const userCreated = await this.userRepository.save(user);

        return userCreated;
    }
}