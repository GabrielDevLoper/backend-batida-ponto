import { IUserRepository } from "../../repositories/IUserRepository";

class ListUserService {
    constructor(private userRepository: IUserRepository) { };

    async execute() {
        const users = await this.userRepository.findAll();

        return users;
    }
}


export { ListUserService }