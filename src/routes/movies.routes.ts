import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  listAllMoviesController,
  updatedMovieController,
} from "../controllers";
import {
  paginationMiddleware,
  validateBodyMiddleware,
  validateIfIdExistsMiddleware,
  validateIfNameExistsMiddleware,
} from "../middleware";
import { movieSchemaRequest, updateMovieSchema } from "../schemas";

const moviesRouter: Router = Router();

moviesRouter.post(
  "",
  validateBodyMiddleware(movieSchemaRequest),
  validateIfNameExistsMiddleware,
  createMovieController
);

moviesRouter.get("", paginationMiddleware, listAllMoviesController);

moviesRouter.patch(
  "/:id",
  validateBodyMiddleware(updateMovieSchema),
  validateIfIdExistsMiddleware,
  validateIfNameExistsMiddleware,
  updatedMovieController
);

moviesRouter.delete(
  "/:id",
  validateIfIdExistsMiddleware,
  deleteMovieController
);

export default moviesRouter;
