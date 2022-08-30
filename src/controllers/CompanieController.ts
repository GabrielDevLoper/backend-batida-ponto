import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class CompanieController {
    async index(req: Request, res: Response) {
        const companies = await prismaClient.companie.findMany();

        return res.json(companies);
    }

    async store(req: Request, res: Response) {
        // const { corporate_name, cnpj, contact_number } = req.body;

        // const companie = await prismaClient.companie.create({
        //     data: {
        //         contact_number,
        //         cnpj,
        //         corporate_name,
        //     }
        // });

        // return res.status(201).json(companie);
    }

    async update(req: Request, res: Response) {
        // const { corporate_name, cnpj, contact_number } = req.body;
        // const { id } = req.params;

        // const companie = await prismaClient.companie.update({
        //     where: {
        //         id: Number(id)
        //     },
        //     data: {
        //         corporate_name,
        //         cnpj,
        //         contact_number
        //     }
        // });

        // return res.json(companie);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const companie = await prismaClient.companie.delete({
            where: {
                id: Number(id)
            }
        });

        return res.json(companie);
    }
}

export default new CompanieController(); 
