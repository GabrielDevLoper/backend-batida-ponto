import { AppError } from "../../../errors/AppError";
import { IUserRepository, UserCreateOrUpdate } from "../repositories/IUserRepository";
import bcrypt from "bcryptjs";

class UserUpdateService {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: UserCreateOrUpdate, id: number) {
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