import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class CompanieController {
    async index(req: Request, res: Response) {
        try {
            const companies = await prismaClient.companie.findMany();

            return res.json(companies);
        } catch (error) {
            return res.status(400).json({ message: "Não foi possível realizar esta ação" });
        }

    }

    async store(req: Request, res: Response) {
        const { corporate_name, cnpj, contact_number } = req.body;

        try {
            const company = await prismaClient.companie.findUnique({
                where: {
                    cnpj
                }
            });

            if (company) {
                return res.status(400).json({ message: "CNPJ já utilizado." })
            }

            const companie = await prismaClient.companie.create({
                data: {
                    contact_number,
                    cnpj,
                    corporate_name,
                }
            });

            return res.status(201).json(companie);
        } catch (error) {
            return res.status(400).json({ message: "Não foi possível realizar esta ação" });
        }
    }

    async update(req: Request, res: Response) {
        const { corporate_name, cnpj, contact_number } = req.body;
        const { id } = req.params;

        try {
            const company = await prismaClient.companie.findUnique({
                where: {
                    id: Number(id)
                }
            });

            if (!company) {
                return res.status(404).json({ message: "Empresa não encontrada." });
            }

            const companie = await prismaClient.companie.update({
                where: {
                    id: Number(id)
                },
                data: {
                    corporate_name,
                    cnpj,
                    contact_number
                }
            });

            return res.json(companie);
        } catch (error) {
            return res.status(400).json({ message: "Não foi possível realizar esta ação" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const companie = await prismaClient.companie.delete({
                where: {
                    id: Number(id)
                }
            });

            return res.json(companie);
        } catch (error) {
            return res.status(400).json({ message: "Não foi possível realizar esta ação" });
        }
    }
}

export default new CompanieController(); 
