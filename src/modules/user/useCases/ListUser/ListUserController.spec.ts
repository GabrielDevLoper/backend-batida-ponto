/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from "supertest";
import { app } from "../../../../app";

describe("List User Controller", () => {
    it("Should be able to list all users", async () => {
        const response = await request(app).get("/usuarios");

        expect(response.status).toBe(200);
    });
});