import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { TMoviesRepository, TMoviesRequest } from "../interfaces";
import { AppError } from "../error";

const validateIfNameExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<TMoviesRequest | void> => {
  const movieName: string = req.body.name;

  if (movieName) {
    const movieRepository: TMoviesRepository =
      AppDataSource.getRepository(Movie);

    const movie: Movie | null = await movieRepository.findOneBy({
      name: movieName,
    });

    if (movie) {
      throw new AppError("Movie already exists.", 409);
    }
  }

  return next();
};

export default validateIfNameExistsMiddleware;
