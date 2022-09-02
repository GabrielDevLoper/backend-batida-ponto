import { IUserRepository } from "../../repositories/IUserRepository";

export class DeleteUserService {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number) {
        const user = await this.userRepository.delete(id);

        return user;
    }
}