import { faker } from "@faker-js/faker";
import { UserInMemoryRepository } from "../../repositories/in-memory/UserInMemoryRepository";
import { CreateUserService } from "../CreateUser/CreateUserService";

import { ListUserService } from "./ListUserService";

let userInMemoryRepository: UserInMemoryRepository;
let listUserService: ListUserService;
let createUserService: CreateUserService;

describe('List User Service', () => {
    beforeAll(() => {
        userInMemoryRepository = new UserInMemoryRepository();
        listUserService = new ListUserService(userInMemoryRepository);
        createUserService = new CreateUserService(userInMemoryRepository);
    });

    it("Should be able to list all users", async () => {
        const user1 = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        }

        const user2 = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        }

        await createUserService.execute(user1);

        await createUserService.execute(user2);

        const users = await listUserService.execute();


        expect(users).toHaveLength(2);
    });


})