/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from "supertest";
import { faker } from '@faker-js/faker/locale/pt_BR';
import { app } from "../../../../app";


describe("Delete User Controller", () => {
    it("Should be able to delete a user", async () => {
        const responseCreateUser = await request(app).post("/usuarios").send({
            username: faker.internet.userName(),
            password: faker.internet.password(),
        });

        const response = await request(app).delete("/usuarios/" + responseCreateUser.body.id);

        expect(response.status).toBe(200);
    });

    it("Should not be able to delete the user, as he doesn't exist", async () => {

        const response = await request(app).delete("/usuarios/" + 99);

        expect(response.status).toBe(404);
    });
});