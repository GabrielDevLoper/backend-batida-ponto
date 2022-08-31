import { UserCreateOrUpdate } from "../repositories/IUserRepository";
import { UserPrismaRepository } from "../repositories/UserPrismaRepository";
import { AppError } from "../../../errors/AppError";
import bcrypt from "bcryptjs";

class UserCreateService {
    constructor(private userRepository: UserPrismaRepository) { };

    async execute({ username, password }: UserCreateOrUpdate) {
        if (await this.userRepository.findByUserName(username)) {
            throw new AppError("Usuário já cadastrado na base.", 400);
        }

        const userCreated = await this.userRepository.save({
            username,
            password: bcrypt.hashSync(password, 8)
        });


        return userCreated;
    }
}


export { UserCreateService };