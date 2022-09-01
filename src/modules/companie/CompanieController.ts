import { Request, Response } from "express";
import { CompaniePrismaRepository } from "./repositories/CompaniePrismaRepository";
import { CompanieCreateService } from "./services/CompanieCreateService";
import { CompanieDeleteService } from "./services/CompanieDeleteService";
import { CompaniesListService } from "./services/CompaniesListService";
import { CompanieUpdateService } from "./services/CompanieUpdateService";

class CompanieController {
    async index(req: Request, res: Response) {
        const companiePrismaRepository = new CompaniePrismaRepository();
        const companiesListService = new CompaniesListService(companiePrismaRepository);

        const result = await companiesListService.execute();

        return res.json(result);
    }
    async store(req: Request, res: Response) {
        const { corporate_name, cnpj } = req.body;

        const data = {
            corporate_name,
            cnpj
        };

        const companiePrismaRepository = new CompaniePrismaRepository();
        const companieCreateService = new CompanieCreateService(companiePrismaRepository);

        const result = await companieCreateService.execute(data);

        return res.status(201).json(result);
    }
    async update(req: Request, res: Response) {
        const { corporate_name, cnpj } = req.body;
        const { id } = req.params;

        const data = {
            corporate_name,
            cnpj
        };

        const companiePrismaRepository = new CompaniePrismaRepository();
        const companieUpdateService = new CompanieUpdateService(companiePrismaRepository);

        const result = await companieUpdateService.execute(data, Number(id));

        return res.json(result);
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const companiePrismaRepository = new CompaniePrismaRepository();
        const companieDeleteService = new CompanieDeleteService(companiePrismaRepository);

        const result = await companieDeleteService.execute(Number(id));

        return res.json(result);
    }
}

export default new CompanieController();