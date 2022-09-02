import { User } from "../../../models/User";
import { ICreateUserRequestDTO } from "../useCases/CreateUser/CreateUserDTO";
import { IUpdateUserRequestDTO } from "../useCases/UpdateUser/UpdateUserDTO";

export interface IUserRepository {
    save(data: ICreateUserRequestDTO): Promise<User>;
    findByUserName(username: string): Promise<User | undefined | null>;
    findAll(): Promise<User[] | null>;
    findById(id: number): Promise<User | undefined | null>;
    update(data: IUpdateUserRequestDTO, id: number): Promise<User | undefined>;
    delete(id: number): Promise<User | undefined>;
}