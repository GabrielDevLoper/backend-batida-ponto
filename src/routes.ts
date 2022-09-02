import { Router } from "express";
import CompanieController from "./modules/companie/CompanieController";
import { RoutesUser } from "./modules/user/infrastructure/routes";

const routes = Router();

routes.use("/usuarios", RoutesUser);



routes.get("/empresas", CompanieController.index);
routes.post("/empresas", CompanieController.store);
routes.put("/empresas/:id", CompanieController.update);
routes.delete("/empresas/:id", CompanieController.delete);


export { routes };