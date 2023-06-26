import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { TMoviesRepository } from "../interfaces";

const deleteMovieService = async (movie: Movie): Promise<void> => {
  const movieRepo: TMoviesRepository = AppDataSource.getRepository(Movie);

  await movieRepo.remove(movie);
};

export default deleteMovieService;
