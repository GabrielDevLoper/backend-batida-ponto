export interface UserCreateOrUpdate {
    username: string;
    password: string;
}

export interface User {
    id: number;
    username: string;
    password: string;
}

export interface IUserRepository {
    save(data: UserCreateOrUpdate): Promise<User>;
    findByUserName(username: string): Promise<User | undefined | null>;
    findAll(): Promise<User[] | null>;
    findById(id: number): Promise<User | undefined | null>;
    update(data: UserCreateOrUpdate, id: number): Promise<User>;
    delete(id: number): Promise<User | undefined>;
}