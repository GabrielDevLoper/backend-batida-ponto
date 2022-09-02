/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from "supertest";
import { faker } from '@faker-js/faker/locale/pt_BR';
import { app } from "../../../../app";


describe("Create User Controller", () => {

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/usuarios").send({
            username: faker.internet.userName(),
            password: faker.internet.password(),
        });

        expect(response.status).toBe(201);
    });

    it("Should not be able to create an existing user", async () => {
        await request(app).post("/usuarios").send({
            username: "teste-integragionexist",
            password: "123",
        });

        const response = await request(app).post("/usuarios").send({
            username: "teste-integragionexist",
            password: "123",
        });

        expect(response.status).toBe(400);
    });
});