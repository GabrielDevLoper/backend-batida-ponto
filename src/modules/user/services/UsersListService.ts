import { UserCreate } from "../repositories/IUserRepository";
import { UserPrismaRepository } from "../repositories/UserPrismaRepository";
import bcrypt from "bcryptjs";


class UsersListService {
    constructor(private userRepository: UserPrismaRepository) { };

    async execute() {
        const users = await this.userRepository.findAll();

        return users;
    }
}


export { UsersListService };