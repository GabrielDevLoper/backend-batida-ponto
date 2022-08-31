import { Request, Response } from "express";
import { UserPrismaRepository } from "./repositories/UserPrismaRepository";
import { UserCreateService } from "./services/UserCreateService";
import { UserDeleteService } from "./services/UserDeleteService";
import { UsersListService } from "./services/UsersListService";
import { UserUpdateService } from "./services/UserUpdateService";

class UserController {
    async index(req: Request, res: Response) {
        const userPrismaRepository = new UserPrismaRepository();
        const usersListService = new UsersListService(userPrismaRepository);

        const result = await usersListService.execute();

        return res.json(result);
    }

    async store(req: Request, res: Response) {
        const { username, password } = req.body;

        const userPrismaRepository = new UserPrismaRepository();
        const userCreateService = new UserCreateService(userPrismaRepository);

        const result = await userCreateService.execute({
            username,
            password
        });

        return res.status(201).json(result);
    }

    async update(req: Request, res: Response) {
        const { username, password } = req.body;
        const { id } = req.params;

        const data = {
            username,
            password
        }

        const userPrismaRepository = new UserPrismaRepository();
        const userUpdateService = new UserUpdateService(userPrismaRepository);

        const userUpdated = await userUpdateService.execute(data, Number(id));

        return res.json(userUpdated);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const userPrismaRepository = new UserPrismaRepository();
        const userDeleteService = new UserDeleteService(userPrismaRepository);

        const result = await userDeleteService.execute(Number(id));

        return res.json(result);
    }

}

export default new UserController();