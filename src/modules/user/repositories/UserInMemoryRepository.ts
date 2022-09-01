import { IUserRepository, User, UserCreateOrUpdate } from "./IUserRepository";
import { randomInt } from "crypto";


class UserInMemoryRepository implements IUserRepository {
    users: User[] = [];

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
        return this.users.find(user => user.username === username);
    }
    async findAll(): Promise<User[] | null> {
        const users = this.users.map(user => user);

        return users;
    }
    async findById(id: number): Promise<User | undefined | null> {
        return this.users.find(user => user.id === id);
    }
    async update(data: UserCreateOrUpdate, id: number): Promise<User | undefined> {
        const userIndex = this.users.findIndex((index => index.id === id));

        this.users[userIndex].username = data.username;
        this.users[userIndex].password = data.password;

        let userUpdated = this.users[userIndex];

        return userUpdated;
    }
    async delete(id: number): Promise<User | undefined> {
        const userDeleted = this.users.find(user => user.id === id);

        const userIndex = this.users.findIndex((index => index.id === id));

        const users = this.users.splice(0, userIndex);
        this.users = users;

        return userDeleted;
    }
}

export { UserInMemoryRepository }