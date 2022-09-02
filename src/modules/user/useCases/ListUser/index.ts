import { UserPrismaRepository } from "../../repositories/prisma/UserPrismaRepository";
import { ListUserController } from "./ListUserController";
import { ListUserService } from "./ListUserService";


const userPrismaRepository = new UserPrismaRepository();
const listUserService = new ListUserService(userPrismaRepository);

const listUserController = new ListUserController(listUserService);


export { listUserController, listUserService };