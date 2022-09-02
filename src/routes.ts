// import CompanieController from "./controllers/CompanieController";
// import UserController from "./controllers/UserController";
import { Router } from "express";
import CompanieController from "./modules/companie/CompanieController";
import UserController from "./modules/user/UserController";
import { createUserController } from "./modules/user/useCases/CreateUser";
import { deleteUserController } from "./modules/user/useCases/DeleteUser";

const routes = Router();

routes.post("/usuarios", (request, response) => {
    return createUserController.handle(request, response);
});
routes.get("/usuarios", UserController.index);
routes.put("/usuarios/:id", UserController.update);

routes.delete("/usuarios/:id", (request, response) => {
    return deleteUserController.handle(request, response);
});
// routes.put("/usuarios/alterar-cargo/:id", UserController.changeRole);


// routes.get("/empresas", CompanieController.index);
// routes.post("/empresas", CompanieController.store);
// routes.put("/empresas/:id", CompanieController.update);
// routes.delete("/empresas/:id", CompanieController.delete);


export { routes };