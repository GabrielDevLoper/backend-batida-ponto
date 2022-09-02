import { Request, Response } from "express";
import { UpdateUserService } from "./UpdateUserService";

class UpdateUserController {
    constructor(private updateUserService: UpdateUserService) { };

    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;
        const { id } = req.params;

        const data = {
            username,
            password
        }

        const user = await this.updateUserService.execute(data, Number(id));

        return res.json(user);
    }
}

export { UpdateUserController }