import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { CreateUserService } from "./CreateUserService";


export class CreateUserController {
    constructor(private createUserService: CreateUserService) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;

        const user = await this.createUserService.execute({
            password,
            username
        });

        return res.status(201).json(user);
    }
}