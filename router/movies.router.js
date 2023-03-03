import express from "express";
import {
  getMovies,
  getMovieById,
  createMovies,
  deleteMovieById,
  updateMovieById,
} from "../service/service/movies.service.js";
const router = express.Router();

router.get("/", async function (request, response) {
  // db.movies.find({})

  // Cursor -> Pagination (20) | Cursor -> Array (toArray())
  const movies = await getMovies();
  console.log(movies);
  response.send(movies);
});

// Dummy -> Mock api
router.get("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  // db.movies.findOne({id:"1000"})

  // const movie = movies.find((mv)=> mv.id === id);
  const movie = await getMovieById(id);

  console.log(movie);

  movie
    ? response.send(movie)
    : response.status(404).send({ message: "Movie not found" });
});

router.post("/", async function (request, response) {
  const data = request.body;
  console.log(data);

  // db.movies.insertMany();
  const result = await createMovies(data);
  response.send(result);
});

router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  // db.movies.deleteOne({id:"1000"})

  const result = await deleteMovieById(id);

  console.log(result);

  result.deletedCount >= 1
    ? response.send({ message: "Movie deleted successfully" })
    : response.status(404).send({ message: "Movie not found" });
});

// Update
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  console.log(data);
  console.log(id);
  // db.movies.updateOne({id:id}, {$set:data})

  // const movie = movies.find((mv)=> mv.id === id);
  const result = await updateMovieById(id, data);
  response.send(result);
});

export default router;
