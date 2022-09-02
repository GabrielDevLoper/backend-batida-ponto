// import { UserInMemoryRepository } from "../repositories/in-memory/UserInMemoryRepository";
// import { UserCreateService } from "./UserCreateService";
// import { faker } from '@faker-js/faker/locale/pt_BR';
// import { AppError } from "../../../errors/AppError";

// let userInMemoryRepository: UserInMemoryRepository;
// let userCreateService: UserCreateService;

// describe("Create user service", () => {

//     beforeAll(() => {
//         userInMemoryRepository = new UserInMemoryRepository();
//         userCreateService = new UserCreateService(userInMemoryRepository);
//     });

//     it("Should be able to create new a user", async () => {
//         const data = {
//             username: faker.internet.userName(),
//             password: faker.internet.password()
//         }

//         const result = await userCreateService.execute(data);

//         expect(result).toHaveProperty("id");
//     });

//     it("Should be not able to create a new user existing", async () => {
//         const user = {
//             username: faker.internet.userName(),
//             password: faker.internet.password()
//         }

//         await userCreateService.execute(user);

//         await expect(userCreateService.execute(user)).rejects.toEqual(new AppError("Usuário já cadastrado na base.", 400));
//     });

// });