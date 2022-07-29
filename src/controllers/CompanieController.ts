import { Request, Response } from "express";
class CompanieController {
    buscarEmpresas(req: Request, res: Response) {
        const empresas = [
            {
                nome: "objetiva"
            },
            {
                nome: "cgj"
            },
            {
                nome: "carajas"
            },
            {
                nome: "bompreco"
            },
        ];

        return res.json({ empresas });
    }
}

export default new CompanieController(); // SINGLETON
