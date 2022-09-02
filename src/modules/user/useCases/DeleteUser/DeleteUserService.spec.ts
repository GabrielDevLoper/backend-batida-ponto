import { faker } from "@faker-js/faker";
import { AppError } from "../../../../errors/AppError";

import { UserInMemoryRepository } from "../../repositories/in-memory/UserInMemoryRepository";
import { CreateUserService } from "../CreateUser/CreateUserService";

import { DeleteUserService } from "./DeleteUserService";


let userInMemoryRepository: UserInMemoryRepository;
let deleteUserService: DeleteUserService;
let createUserService: CreateUserService;

describe('User delete service', () => {
    beforeAll(() => {
        userInMemoryRepository = new UserInMemoryRepository();
        deleteUserService = new DeleteUserService(userInMemoryRepository);
        createUserService = new CreateUserService(userInMemoryRepository);
    });

    it("Should be able to delete a user", async () => {
        const data = {
            username: faker.internet.userName(),
            password: faker.internet.password(),
        }

        const userCreated = await createUserService.execute(data);

        const userDeleted = await deleteUserService.execute(userCreated.id);

        expect(userDeleted).toHaveProperty("id");
    });

    it("Should be not able to delete a user", async () => {
        await expect(deleteUserService.execute(99)).rejects.toEqual(new AppError("Usuário não encontrado.", 404));
    });
})