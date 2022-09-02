import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { deleteUserController } from "../useCases/DeleteUser";
import { listUserController } from "../useCases/ListUser";
import { updateUserController } from "../useCases/UpdateUser";

const RoutesUser = Router();

RoutesUser.get("/", (request, response) => {
    return listUserController.handle(request, response);
});

RoutesUser.post("/", (request, response) => {
    return createUserController.handle(request, response);
});

RoutesUser.put("/:id", (request, response) => {
    return updateUserController.handle(request, response);
});

RoutesUser.delete("/:id", (request, response) => {
    return deleteUserController.handle(request, response);
});

export { RoutesUser };