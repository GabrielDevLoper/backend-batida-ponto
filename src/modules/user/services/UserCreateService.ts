import { IUserRepository } from "../repositories/IUserRepository";
import { AppError } from "../../../errors/AppError";
import bcrypt from "bcryptjs";
import { ICreateUserRequestDTO } from "../useCases/CreateUser/CreateUserDTO";

class UserCreateService {
    constructor(private userRepository: IUserRepository) { };

    async execute({ username, password }: ICreateUserRequestDTO) {
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