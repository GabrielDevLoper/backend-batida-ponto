import { Request, Response } from "express";
import { ListUserService } from "./ListUserService";

class ListUserController {
    constructor(private listUserService: ListUserService) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const users = await this.listUserService.execute();

        return res.json(users);
    }
}

export { ListUserController };