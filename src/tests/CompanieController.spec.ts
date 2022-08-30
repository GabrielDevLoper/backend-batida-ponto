/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from "../app";
import request from "supertest";

describe("Companie controller", () => {

    it("Should be able to list all companies", async () => {
        const response = await request(app).get("/empresas");

        expect(response.status).toBe(200);
    });

    it("Should be able to create a new companie", async () => {
        const response = await request(app).post("/empresas").send({
            corporate_name: "Carajás",
            cnpj: "123123123",
            contact_number: "846584561"
        });

        expect(response.status).toBe(201);
    });


    it("Should be able to update a companie", async () => {
        const response = await request(app).put("/empresas/" + 1).send({
            corporate_name: "Carajás teste",
            cnpj: "4563",
            contact_number: "846584561"
        });

        expect(response.status).toBe(200);
    });

    it("Should be able to delete a companie", async () => {
        const response = await request(app).delete("/empresas/" + 1);

        expect(response.status).toBe(200);
    });


});