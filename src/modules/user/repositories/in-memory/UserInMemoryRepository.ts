import { IUserRepository } from "../IUserRepository";
import { randomInt } from "crypto";
import { User } from "../../../../models/User";
import { ICreateUserRequestDTO } from "../../useCases/CreateUser/CreateUserDTO";


class UserInMemoryRepository implements IUserRepository {
    private users: User[] = [];

    async save(data: ICreateUserRequestDTO): Promise<User> {
        const id = randomInt(50);

        const user: User = {
            ...data,
            id
        }

        this.users.push(user);

        return user;
    }
    async findByUserName(username: string): Promise<User | undefined | null> {
        const user = this.users.find(user => user.username === username);

        return user;
    }
    async findAll(): Promise<User[] | null> {
        const users = this.users.map(user => user);

        return users;
    }
    async findById(id: number): Promise<User | undefined | null> {
        const user = this.users.find(user => user.id === id);

        return user;
    }
    async update(data: ICreateUserRequestDTO, id: number): Promise<User | undefined> {
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

        return this.users[userIndex] === undefined ? userDeleted : undefined;
    }
}

export { UserInMemoryRepository }