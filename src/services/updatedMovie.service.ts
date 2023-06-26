import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  TMoviesRepository,
  TMoviesResponse,
  TMoviesUpdate,
} from "../interfaces";
import { movieSchemaResponse } from "../schemas";

const updatedMovieService = async (
  movie: Movie,
  payload: TMoviesUpdate
): Promise<TMoviesUpdate> => {
  const movieRepo: TMoviesRepository = AppDataSource.getRepository(Movie);

  const movieUpdateData: Movie = movieRepo.create({ ...movie, ...payload });
  await movieRepo.save(movieUpdateData);

  const movieUpdateDataResponse: TMoviesResponse =
    movieSchemaResponse.parse(movieUpdateData);

  return movieUpdateDataResponse;
};

export default updatedMovieService;
