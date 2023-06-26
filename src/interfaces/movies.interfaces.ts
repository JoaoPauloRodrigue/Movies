import { z } from "zod";
import {
  listAllMoviesSchemaResponse,
  movieSchemaRequest,
  movieSchemaResponse,
  moviesSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";

type TMovies = z.infer<typeof moviesSchema>;

type TMoviesRequest = z.infer<typeof movieSchemaRequest>;

type TMoviesResponse = z.infer<typeof movieSchemaResponse>;

type TListAllMoviesResponse = z.infer<typeof listAllMoviesSchemaResponse>;

type TMoviesUpdate = DeepPartial<TMoviesRequest>;

type TMoviesRepository = Repository<Movie>;

export {
  TMovies,
  TMoviesRequest,
  TMoviesResponse,
  TListAllMoviesResponse,
  TMoviesUpdate,
  TMoviesRepository,
};
