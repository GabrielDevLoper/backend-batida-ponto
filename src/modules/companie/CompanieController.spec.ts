// /**
//  * @jest-environment ./prisma/prisma-environment-jest
//  */

// import { app } from "../../app";
// import request from "supertest";
// import { faker } from '@faker-js/faker/locale/pt_BR';

// describe("Companie controller", () => {
//     it("Should be able to list all companies", async () => {
//         const response = await request(app).get("/empresas");

//         expect(response.status).toBe(200);
//     });

//     it("Should be able to create a new companie", async () => {
//         const response = await request(app).post("/empresas").send({
//             corporate_name: faker.company.name(),
//             cnpj: "123123",
//             contact_number: faker.phone.number()
//         });

//         expect(response.status).toBe(201);
//     });

//     it("Should be able to update a companie", async () => {
//         const responseCreateCompanie = await request(app).post("/empresas").send({
//             corporate_name: faker.company.name(),
//             cnpj: "453453",
//             contact_number: faker.phone.number()
//         });

//         expect(responseCreateCompanie.body).toHaveProperty("id");

//         const response = await request(app).put("/empresas/" + responseCreateCompanie.body.id).send({
//             corporate_name: faker.company.name(),
//             cnpj: "435234234544",
//             contact_number: faker.phone.number()
//         });

//         expect(response.status).toBe(200);
//     });

//     it("Should be able to delete a companie", async () => {
//         const responseCreateCompanie = await request(app).post("/empresas").send({
//             corporate_name: faker.company.name(),
//             cnpj: "453453",
//             contact_number: faker.phone.number()
//         });

//         expect(responseCreateCompanie.body).toHaveProperty("id");

//         const response = await request(app).delete("/empresas/" + responseCreateCompanie.body.id);

//         expect(response.status).toBe(200);
//     });

//     it("Should not be able to update a companie, as he doesn't exist", async () => {
//         const response = await request(app).put("/empresas/" + 100).send({
//             corporate_name: faker.company.name(),
//             cnpj: "435234234544",
//             contact_number: faker.phone.number()
//         });

//         expect(response.status).toBe(404);
//     });

//     it("Should not be able to create an existing company", async () => {
//         await request(app).post("/empresas").send({
//             corporate_name: faker.company.name(),
//             cnpj: "435234234544",
//             contact_number: faker.phone.number()
//         });

//         const response = await request(app).post("/empresas").send({
//             corporate_name: faker.company.name(),
//             cnpj: "435234234544",
//             contact_number: faker.phone.number()
//         });

//         expect(response.status).toBe(400);
//     });
// })