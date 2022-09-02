/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from "supertest";
import { faker } from '@faker-js/faker/locale/pt_BR';
import { app } from "../../../../app";


describe("Update User Controller", () => {

    it("Should be able to update a user", async () => {
        const responseCreateUser = await request(app).post("/usuarios").send({
            username: faker.internet.userName(),
            password: faker.internet.password(),
        });

        const responseUpdateUser = await request(app).put("/usuarios/" + responseCreateUser.body.id).send({
            username: "teste-upate-01",
            password: "123",
        });

        expect(responseUpdateUser.status).toBe(200);
    });

    it("Should not be able to update the user, as he doesn't exist", async () => {
        const response = await request(app).put("/usuarios/" + 99).send({
            username: "teste-integragionexist",
            password: "123",
        });

        expect(response.status).toBe(404);
    });

});