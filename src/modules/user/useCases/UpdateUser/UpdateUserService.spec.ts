import { faker } from "@faker-js/faker";
import { AppError } from "../../../../errors/AppError";
import { UserInMemoryRepository } from "../../repositories/in-memory/UserInMemoryRepository";
import { CreateUserService } from "../CreateUser/CreateUserService";
import { UpdateUserService } from "./UpdateUserService";

let userInMemoryRepository: UserInMemoryRepository;
let updateUserService: UpdateUserService;
let createUserService: CreateUserService;

describe("Update user service", () => {

    beforeAll(() => {
        userInMemoryRepository = new UserInMemoryRepository();
        updateUserService = new UpdateUserService(userInMemoryRepository);
        createUserService = new CreateUserService(userInMemoryRepository);
    })

    it("Should be able to update a user", async () => {
        const user1 = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        }

        const userCreated = await createUserService.execute(user1);

        const user2 = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        }

        const result = await updateUserService.execute(user2, userCreated.id);

        expect(result).toHaveProperty("id");
    });

    it("Should not be able to update the user if it doesn't existing", async () => {
        const user = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        }

        await expect(updateUserService.execute(user, 99)).rejects.toEqual(new AppError("Usuário não encontrado.", 404));
    });
});