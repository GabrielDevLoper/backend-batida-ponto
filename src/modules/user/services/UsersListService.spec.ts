import { faker } from "@faker-js/faker";
import { UserInMemoryRepository } from "../repositories/in-memory/UserInMemoryRepository";
import { User } from "../repositories/IUserRepository";
import { UserCreateService } from "./UserCreateService";
import { UsersListService } from "./UsersListService";

let userInMemoryRepository: UserInMemoryRepository;
let userListService: UsersListService;
let userCreateService: UserCreateService;



describe('User list service', () => {
    beforeAll(() => {
        userInMemoryRepository = new UserInMemoryRepository();
        userListService = new UsersListService(userInMemoryRepository);
        userCreateService = new UserCreateService(userInMemoryRepository);
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

        await userCreateService.execute(user1);

        await userCreateService.execute(user2);

        const users = await userListService.execute();


        expect(users).toHaveLength(2);
    });


})