import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCient";

class UsuarioController {

    async index(req: Request, res: Response){
        const users = await prismaClient.user.findMany();

        return res.json(users);
    }

    async store(req: Request, res: Response){

    }

    async update(req: Request, res: Response){

    }
    
    async delete(req: Request, res: Response){

    }

    async show(req: Request, res: Response){

    }
}

export default new UsuarioController(); // SINGLETON