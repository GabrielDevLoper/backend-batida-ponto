import { AppError } from "../../../errors/AppError";
import { IUserRepository, IUser } from "../repositories/IUserRepository";
import bcrypt from "bcryptjs";
import { ICreateUserRequestDTO } from "../useCases/CreateUser/CreateUserDTO";

class UserUpdateService {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: ICreateUserRequestDTO, id: number) {
        if (!await this.userRepository.findById(id)) {
            throw new AppError("Usuário não encontrado.", 404);
        }

        const user = await this.userRepository.update({
            username: data.username,
            password: bcrypt.hashSync(data.password, 8)
        }, id);

        return user;
    }
}

export { UserUpdateService }