import { Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";

export class DeleteUserController {
    constructor(private deleteUserService: DeleteUserService) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const user = await this.deleteUserService.execute(Number(id));

        return res.json(user);
    };
}