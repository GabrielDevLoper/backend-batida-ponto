import { Router, Request, Response } from "express";
import CompanieController from "./controllers/CompanieController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/usuarios", UserController.buscarUsuarios);

routes.get("/empresas", CompanieController.buscarEmpresas);

export { routes };