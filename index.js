import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { Db, MongoClient } from "mongodb";
const app = express();

console.log(process.env.MONGO_URL);

const PORT = process.env.PORT; // Auto-assignable

//.env -> environment variables
// const MONGO_URL = "mongodb://127.0.0.1";

const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL); // dial
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
app.get("/movies", async function (request, response) {
  // db.movies.find({})

  // Cursor -> Pagination (20) | Cursor -> Array (toArray())
  const movies = await client
    .db("B42WD")
    .collection("movies")
    .find({})
    .toArray();
  console.log(movies);
  response.send(movies);
});

// Dummy -> Mock api
app.get("/movies/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  // db.movies.findOne({id:"1000"})

  // const movie = movies.find((mv)=> mv.id === id);
  const movie = await client
    .db("B42WD")
    .collection("movies")
    .findOne({ id: id });

  console.log(movie);

  movie
    ? response.send(movie)
    : response.status(404).send({ message: "Movie not found" });
});

app.post("/movies", async function (request, response) {
  const data = request.body;
  console.log(data);

  // db.movies.insertMany();
  const result = await client.db("B42WD").collection("movies").insertMany(data);
  response.send(result);
});

app.delete("/movies/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  // db.movies.deleteOne({id:"1000"})

  const result = await client
    .db("B42WD")
    .collection("movies")
    .deleteOne({ id: id });

  console.log(result);

  result.deletedCount >= 1
    ? response.send({ message: "Movie deleted successfully" })
    : response.status(404).send({ message: "Movie not found" });
});

// Update
app.put("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  console.log(data);
  console.log(id);
  // db.movies.updateOne({id:id}, {$set:data})

  // const movie = movies.find((mv)=> mv.id === id);
  const result = await client
    .db("B42WD")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
  response.send(result);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// Diff bet filter and find

// [4, 8, 11, 15, 8, 4].filter((x) => x > 6);
// [4, 8, 11, 15, 8, 4].find((x) => x > 6);
