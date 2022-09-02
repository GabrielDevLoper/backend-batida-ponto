import { IUserRepository, UserCreateOrUpdate } from "../repositories/IUserRepository";
import { UserPrismaRepository } from "../repositories/prisma/UserPrismaRepository";
import { AppError } from "../../../errors/AppError";
import bcrypt from "bcryptjs";

class UserCreateService {
    constructor(private userRepository: IUserRepository) { };

    async execute({ username, password }: UserCreateOrUpdate) {
        const userAlreadyExists = await this.userRepository.findByUserName(username);

        if (userAlreadyExists) {
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