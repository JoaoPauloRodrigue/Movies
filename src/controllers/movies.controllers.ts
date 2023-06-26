import { Request, Response } from "express";
import {
  IMoviesPagination,
  TMoviesRequest,
  TMoviesResponse,
  TMoviesUpdate,
} from "../interfaces";
import {
  createMovieService,
  deleteMovieService,
  listAllMoviesService,
  updatedMovieService,
} from "../services";
import { Movie } from "../entities";

const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TMoviesRequest = req.body;
  const newMovieCreated: TMoviesResponse = await createMovieService(payload);

  return res.status(201).json(newMovieCreated);
};

const listAllMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listMovies: IMoviesPagination = await listAllMoviesService(
    res.locals.pagination
  );

  return res.status(200).json(listMovies);
};

const updatedMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TMoviesUpdate = req.body;

  const movieUpdate: Movie = res.locals.movie;

  const newMovieUpdated = await updatedMovieService(movieUpdate, payload);

  return res.status(200).json(newMovieUpdated);
};

const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieDelete: Movie = res.locals.movie;

  await deleteMovieService(movieDelete);

  return res.status(204).send();
};

export {
  createMovieController,
  listAllMoviesController,
  updatedMovieController,
  deleteMovieController,
};
