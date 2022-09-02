import { UserPrismaRepository } from "../../repositories/prisma/UserPrismaRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";

const userPrismaRepository = new UserPrismaRepository();
const updateUserService = new UpdateUserService(userPrismaRepository);

const updateUserController = new UpdateUserController(updateUserService);

export { updateUserController, updateUserService }
