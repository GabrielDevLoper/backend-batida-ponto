/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from "../app";
import request from "supertest";

describe("User controller", () => {
    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/usuarios").send({
            username: "teste123",
            password: "123",
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

    it("Should be able to update a user", async () => {
        const responseCreateUser = await request(app).post("/usuarios").send({
            username: "teste update",
            password: "123",
        });

        expect(responseCreateUser.body).toHaveProperty("id");

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

    it("Should be able to delete a user", async () => {
        const responseCreateUser = await request(app).post("/usuarios").send({
            username: "teste1234",
            password: "123",
        });

        const responseDeleteUser = await request(app).delete("/usuarios/" + responseCreateUser.body.id);

        expect(responseDeleteUser.status).toBe(200);
    });

    it("Should be able to list all users", async () => {
        const response = await request(app).get("/usuarios");

        expect(response.status).toBe(200);
    });
});