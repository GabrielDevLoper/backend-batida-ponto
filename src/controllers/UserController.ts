import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prismaClient } from "../database/prismaClient";

class UsuarioController {

    async index(req: Request, res: Response) {
        try {
            const users = await prismaClient.user.findMany();

            return res.json(users);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Não foi possível realizar a busca dos usuários" });
        }
    }

    async store(req: Request, res: Response) {
        const { username, password } = req.body;

        const userAlreadyExists = await prismaClient.user.findUnique({
            where: {
                username
            }
        });

        if (userAlreadyExists) {
            return res.status(400).json({ message: "Username já utilizado." })
        }

        const user = await prismaClient.user.create({
            data: {
                username,
                password: bcrypt.hashSync(password, 8),
            }
        });

        return res.status(201).json(user);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { username, password, companie_id } = req.body;

        const verifyUserExists = await prismaClient.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!verifyUserExists) {
            return res.status(404).json({ message: "User not found" });
        }

        await prismaClient.user.update({
            where: {
                id: verifyUserExists.id
            },
            data: {
                username,
                password,
                companie_id
            }
        });

        return res.json(verifyUserExists);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const verifyUserExists = await prismaClient.user.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!verifyUserExists) {
            return res.json({ message: "Usuário não encontrado" });
        }

        await prismaClient.user.delete({
            where: {
                id: verifyUserExists.id
            }
        });

        return res.json({ message: "Usuário deletado com sucesso." });

    }

    async changeRole(req: Request, res: Response) {
        const { id } = req.params;

        const { role } = req.body;

        await prismaClient.user.update({
            where: {
                id: Number(id)
            },
            data: {
                role
            }
        });

        return res.json({ message: "Cargo alterado com sucesso." });
    }
}

export default new UsuarioController(); // SINGLETON