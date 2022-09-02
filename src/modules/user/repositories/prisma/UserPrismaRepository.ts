import { prismaClient } from "../../../../database/prismaClient";
import { User } from "../../../../models/User";
import { ICreateUserRequestDTO } from "../../useCases/CreateUser/CreateUserDTO";
import { IUserRepository } from "../IUserRepository";

class UserPrismaRepository implements IUserRepository {
    save(data: ICreateUserRequestDTO): Promise<User> {
        const user = prismaClient.user.create({
            data
        });

        return user;
    }

    findByUserName(username: string): Promise<User | undefined | null> {
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

    findById(id: number): Promise<User | undefined | null> {
        const user = prismaClient.user.findUnique({
            where: {
                id
            }
        });

        return user;
    }

    update({ username, password }: ICreateUserRequestDTO, id: number): Promise<User> {
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