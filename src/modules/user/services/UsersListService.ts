import { UserPrismaRepository } from "../repositories/UserPrismaRepository";

class UsersListService {
    constructor(private userRepository: UserPrismaRepository) { };

    async execute() {
        const users = await this.userRepository.findAll();

        return users;
    }
}


export { UsersListService };