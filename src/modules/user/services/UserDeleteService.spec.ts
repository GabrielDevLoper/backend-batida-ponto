import { faker } from "@faker-js/faker";
import { AppError } from "../../../errors/AppError";
import { UserInMemoryRepository } from "../repositories/in-memory/UserInMemoryRepository";
import { UserCreateService } from "./UserCreateService";
import { UserDeleteService } from "./UserDeleteService";

let userInMemoryRepository: UserInMemoryRepository;
let userDeleteService: UserDeleteService;
let userCreateService: UserCreateService;

describe('User delete service', () => {
    beforeAll(() => {
        userInMemoryRepository = new UserInMemoryRepository();
        userDeleteService = new UserDeleteService(userInMemoryRepository);
        userCreateService = new UserCreateService(userInMemoryRepository);
    });

    it("Should be able to delete a user", async () => {
        const data = {
            username: faker.internet.userName(),
            password: faker.internet.password(),
        }

        const userCreated = await userCreateService.execute(data);

        const userDeleted = await userDeleteService.execute(userCreated.id);

        expect(userDeleted).toHaveProperty("id");
    });

    it("Should be not able to delete a user", async () => {
        await expect(userDeleteService.execute(99)).rejects.toEqual(new AppError("Usuário não encontrado", 404));
    });
})