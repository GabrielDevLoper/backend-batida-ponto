import { Router, Request, Response } from "express";
import CompanieController from "./controllers/CompanieController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/usuarios", UserController.index);

routes.get("/empresas", CompanieController.index);

export { routes };