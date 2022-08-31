import { prismaClient } from "../../../database/prismaClient";
import { IUserRepository, UserCreate, UserSave } from "./IUserRepository";

class UserPrismaRepository implements IUserRepository {
    save(data: UserCreate): Promise<UserSave> {
        const user = prismaClient.user.create({
            data
        });

        return user;
    }

    findByUserName(username: string): Promise<UserSave | null> {
        const user = prismaClient.user.findUnique({
            where: {
                username
            }
        });

        return user;
    }

    findAll(): Promise<UserSave[] | null> {
        const users = prismaClient.user.findMany();

        return users
    }

}

export { UserPrismaRepository };