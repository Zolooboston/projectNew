require("dotenv").config();

const express = require("express");
const { neon } = require("@neondatabase/serverless");
const app = express();

app.get("/", async (_, res) => {
  console.log(process.env.DATABASE_URL);

  const sql = neon(`${process.env.DATABASE_URL}`);

  const response = await sql`SELECT version()`;

  const { version } = response[0];

  res.json({ version });
});

app.listen(2222, () => {
  console.log(`Listening to http://localhost:4242`);
});
