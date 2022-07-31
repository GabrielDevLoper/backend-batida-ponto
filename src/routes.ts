import { Router, Request, Response } from "express";
import CompanieController from "./controllers/CompanieController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/usuarios", UserController.index);
routes.post("/usuarios", UserController.store);
routes.put("/usuarios", UserController.update);
routes.put("/usuarios/alterar-cargo/:id", UserController.changeRole);


routes.get("/empresas", CompanieController.index);

export { routes };