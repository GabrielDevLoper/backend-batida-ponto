import { ICreateUserRequestDTO } from "../useCases/CreateUser/CreateUserDTO";

export interface IUser {
    username: string;
    password: string;
}

export interface IUserRepository {
    save(data: ICreateUserRequestDTO): Promise<IUser>;
    findByUserName(username: string): Promise<IUser | undefined | null>;
    findAll(): Promise<IUser[] | null>;
    findById(id: number): Promise<IUser | undefined | null>;
    update(data: ICreateUserRequestDTO, id: number): Promise<IUser | undefined>;
    delete(id: number): Promise<IUser | undefined>;
}