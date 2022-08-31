import { prismaClient } from "../../../database/prismaClient";
import { IUserRepository, UserCreateOrUpdate, User } from "./IUserRepository";

class UserPrismaRepository implements IUserRepository {
    save(data: UserCreateOrUpdate): Promise<User> {
        const user = prismaClient.user.create({
            data
        });

        return user;
    }

    findByUserName(username: string): Promise<User | null> {
        const user = prismaClient.user.findUnique({
            where: {
                username
            }
        });

        return user;
    }

    findAll(): Promise<User[] | null> {
        const users = prismaClient.user.findMany();

        return users
    }

    findById(id: number): Promise<User | null> {
        const user = prismaClient.user.findUnique({
            where: {
                id
            }
        });

        return user;
    }

    update({ username, password }: UserCreateOrUpdate, id: number): Promise<User> {
        const user = prismaClient.user.update({
            where: {
                id
            },
            data: {
                username,
                password
            }
        });

        return user;
    }

    delete(id: number): Promise<User> {
        const userDeleted = prismaClient.user.delete({
            where: {
                id
            }
        });

        return userDeleted;
    }

}

export { UserPrismaRepository };