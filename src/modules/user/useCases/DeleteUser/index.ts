import { UserPrismaRepository } from "../../repositories/prisma/UserPrismaRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";

const userPrismaRepository = new UserPrismaRepository();
const deleteUserService = new DeleteUserService(userPrismaRepository);

const deleteUserController = new DeleteUserController(deleteUserService);

export { deleteUserController, deleteUserService }
