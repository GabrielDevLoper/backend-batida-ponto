import { UserCreate } from "../repositories/IUserRepository";
import { UserPrismaRepository } from "../repositories/UserPrismaRepository";
import bcrypt from "bcryptjs";


class UserCreateService {
    constructor(private userRepository: UserPrismaRepository) { };

    async execute({ username, password }: UserCreate) {
        await this.verifyUserExists(username);

        const userCreated = await this.userRepository.save({
            username,
            password: bcrypt.hashSync(password, 8)
        });


        return userCreated;
    }

    async verifyUserExists(username: string) {
        const userExists = await this.userRepository.findByUserName(username);

        if (userExists) {
            throw new Error("Usuário já existe!");
        }
    }
}


export { UserCreateService };