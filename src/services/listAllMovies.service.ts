import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  IMoviesPagination,
  IPaginationParams,
  TMoviesRepository,
} from "../interfaces";

const listAllMoviesService = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: IPaginationParams): Promise<IMoviesPagination> => {
  const movieRepo: TMoviesRepository = AppDataSource.getRepository(Movie);

  const [listMovies, count]: [Movie[], number] = await movieRepo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: listMovies,
  };
};

export default listAllMoviesService;
