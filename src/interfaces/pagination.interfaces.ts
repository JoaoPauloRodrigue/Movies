import { Movie } from "../entities";

interface IMoviesPagination {
  prevPage: string | null;
  nextPage: string | null;
  count: any;
  data: Array<Movie>;
}

interface IPaginationParams {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
}

export { IMoviesPagination, IPaginationParams };
