const NodeEnvironment = require("jest-environment-node").default;
const { execSync } = require("child_process");
const { resolve } = require("path");
const { Client } = require("pg");

const prismaCli = resolve(__dirname, "..", "node_modules/.bin/prisma");

require("dotenv").config({
    path: resolve(__dirname, "..", ".env.test")
});


class CustomEnvironment extends NodeEnvironment {

    constructor(config) {
        super(config);
        this.schema = "code_schema";
        this.connectionString = `${process.env.DATABASE_URL}`
    }

    setup() {
        process.env.DATABASE_URL = this.connectionString;
        this.global.process.env.DATABASE_URL = this.connectionString;

        execSync(`${prismaCli} migrate dev`)
    }

    async teardown() {
        const client = new Client({
            connectionString: this.connectionString
        });

        await client.connect();
        await client.query(`drop schema if exists "${this.schema}" cascade`);
        await client.end();
    }

}


module.exports = CustomEnvironment;