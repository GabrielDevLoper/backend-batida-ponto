// import { faker } from "@faker-js/faker";
// import { AppError } from "../../../errors/AppError";
// import { UserInMemoryRepository } from "../repositories/in-memory/UserInMemoryRepository";
// import { UserCreateService } from "./UserCreateService";
// import { UserUpdateService } from "./UserUpdateService";

// let userInMemoryRepository: UserInMemoryRepository;
// let userUpdateService: UserUpdateService;
// let userCreateService: UserCreateService;

// describe("Update user service", () => {

//     beforeAll(() => {
//         userInMemoryRepository = new UserInMemoryRepository();
//         userUpdateService = new UserUpdateService(userInMemoryRepository);
//         userCreateService = new UserCreateService(userInMemoryRepository);
//     })

//     it("Should be able to update a user", async () => {
//         const user1 = {
//             username: faker.internet.userName(),
//             password: faker.internet.password()
//         }

//         const userCreated = await userCreateService.execute(user1);

//         const user2 = {
//             username: faker.internet.userName(),
//             password: faker.internet.password()
//         }

//         const result = await userUpdateService.execute(user2, userCreated.id);

//         expect(result).toHaveProperty("id");
//     });

//     it("Should not be able to update the user if it doesn't existing", async () => {
//         const user = {
//             username: faker.internet.userName(),
//             password: faker.internet.password()
//         }

//         await expect(userUpdateService.execute(user, 99)).rejects.toEqual(new AppError("Usuário não encontrado.", 404));
//     });
// });