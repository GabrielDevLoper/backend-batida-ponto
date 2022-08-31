import { Router } from "express";
import CompanieController from "./controllers/CompanieController";
import UserController from "./modules/user/UserController";
// import UserController from "./controllers/UserController";



const routes = Router();

routes.get("/usuarios", UserController.index);
routes.post("/usuarios", UserController.store);
routes.put("/usuarios/:id", UserController.update);
routes.delete("/usuarios/:id", UserController.delete);
// routes.put("/usuarios/alterar-cargo/:id", UserController.changeRole);


routes.get("/empresas", CompanieController.index);
routes.post("/empresas", CompanieController.store);
routes.put("/empresas/:id", CompanieController.update);
routes.delete("/empresas/:id", CompanieController.delete);


export { routes };