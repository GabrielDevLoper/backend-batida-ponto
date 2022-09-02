import { UserPrismaRepository } from "../../repositories/prisma/UserPrismaRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const userPrismaRepository = new UserPrismaRepository();
const createUserService = new CreateUserService(userPrismaRepository);

const createUserController = new CreateUserController(createUserService);

export { createUserController, createUserService };