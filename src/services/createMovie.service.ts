import {
  TMoviesRepository,
  TMoviesRequest,
  TMoviesResponse,
} from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { moviesSchema } from "../schemas";

const createMovieService = async (payload: TMoviesRequest): Promise<Movie> => {
  const movieRepo: TMoviesRepository = AppDataSource.getRepository(Movie);

  const movie: Movie = movieRepo.create(payload);

  await movieRepo.save(movie);

  const movieResponse: TMoviesResponse = moviesSchema.parse(movie);

  return movieResponse;
};

export default createMovieService;
