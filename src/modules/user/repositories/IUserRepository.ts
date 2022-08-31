export interface UserCreate {
    username: string;
    password: string;
}

export interface UserSave {
    id: number;
    username: string;
    password: string;
}

export interface IUserRepository {
    save(data: UserCreate): Promise<UserSave>;
    findByUserName(username: string): Promise<UserSave | null>;
    findAll(): Promise<UserSave[] | null>
}