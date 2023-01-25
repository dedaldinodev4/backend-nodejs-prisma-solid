const NodeEnvironment = require('jest-environment-node').TestEnvironment
const crypto = require("node:crypto")
const { exec }  = require("child_process")
const { Client } = require("pg")
const dotenv = require("dotenv");
const { join, resolve } = require("path")

const prismaCLI = "./node_modules/.bin/prisma"

dotenv.config({ path: '.env.test' });

class PrismaTestEnvironment extends NodeEnvironment {
  
  constructor(config, context) {
    super(config, context);
    this.schema = `prisma_schema_${crypto.randomUUID()}`
    this.connectionString = `${process.env.DATABASE_URL}${this.schema}`
  }

  async setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    //* Migrations Mapper *//
    await exec(`${resolve(prismaCLI)} migrate deploy`);

    return super.setup();
  }

  async teardown() {
    const client = new Client({
      connectionString: this.connectionString
    });

    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`)
    await client.end();
  }
}

module.exports = PrismaTestEnvironment;