import { IUserRepository, User, UserCreateOrUpdate } from "./IUserRepository";
import { randomInt } from "crypto";


class UserInMemoryRepository implements IUserRepository {
    users: User[];

    async save(data: UserCreateOrUpdate): Promise<User> {

        const id = randomInt(50);

        const user: User = {
            ...data,
            id
        }

        this.users.push(user);

        return user;
    }
    async findByUserName(username: string): Promise<User | undefined | null> {
        return this.users.find(user => user.username === username)
    }
    async findAll(): Promise<User[] | null> {
        const users = this.users.map(user => user);

        return users;
    }
    async findById(id: number): Promise<User | undefined | null> {
        return this.users.find(user => user.id === id);
    }
    update(data: UserCreateOrUpdate, id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number): Promise<User | undefined> {
        const userDeleted = this.users.find(user => user.id === id);

        this.users.filter(user => user.id !== id);

        return userDeleted;
    }
}

export { UserInMemoryRepository }