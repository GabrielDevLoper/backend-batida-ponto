import { IUserRepository } from "../repositories/IUserRepository";

class UsersListService {
    constructor(private userRepository: IUserRepository) { };

    async execute() {
        const users = await this.userRepository.findAll();

        return users;
    }
}


export { UsersListService };