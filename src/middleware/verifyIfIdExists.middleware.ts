import { NextFunction, Request, Response } from "express";
import { TMoviesRepository } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

const validateIfIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieId: number = parseInt(req.params.id);

  const movieRepository: TMoviesRepository = AppDataSource.getRepository(Movie);

  const movie: Movie | null = await movieRepository.findOneBy({ id: movieId });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  res.locals = { ...res.locals, movie };

  return next();
};

export default validateIfIdExistsMiddleware;
