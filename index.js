import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { Db, MongoClient } from "mongodb";
import moviesRouter from "./router/movies.router.js";

const app = express();

console.log(process.env.MONGO_URL);

const PORT = process.env.PORT; // Auto-assignable

//.env -> environment variables
// const MONGO_URL = "mongodb://127.0.0.1";

const MONGO_URL = process.env.MONGO_URL;

export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

// express.json() - inbuilt middleware
// intercepts -> apply middleware -> converting body to json
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 B42WD");
});

// http://loca/lhost:4000/movies

app.use("/movies", moviesRouter);
// app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// Diff bet filter and find

// [4, 8, 11, 15, 8, 4].filter((x) => x > 6);
// [4, 8, 11, 15, 8, 4].find((x) => x > 6);
