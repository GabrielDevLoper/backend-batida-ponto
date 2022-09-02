

import { faker } from '@faker-js/faker/locale/pt_BR';
import { AppError } from '../../../../errors/AppError';
import { UserInMemoryRepository } from '../../repositories/in-memory/UserInMemoryRepository';

import { CreateUserService } from "./CreateUserService";

let userInMemoryRepository: UserInMemoryRepository;
let createUserService: CreateUserService;

describe("Create User service", () => {

    beforeAll(() => {
        userInMemoryRepository = new UserInMemoryRepository();
        createUserService = new CreateUserService(userInMemoryRepository);
    });

    it("Should be able to create new a user", async () => {
        const data = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        }

        const result = await createUserService.execute(data);

        expect(result).toHaveProperty("id");
    });

    it("Should be not able to create a new user existing", async () => {
        const user = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        }

        await createUserService.execute(user);

        await expect(createUserService.execute(user)).rejects.toEqual(new AppError("Usuário já cadastrado na base.", 400));
    });

});