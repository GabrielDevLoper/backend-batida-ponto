import { Request, Response } from "express";
import { UserPrismaRepository } from "./repositories/UserPrismaRepository";
import { UserCreateService } from "./services/UserCreateService";
import { UsersListService } from "./services/UsersListService";

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

}

export default new UserController();