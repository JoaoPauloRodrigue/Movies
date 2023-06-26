import { z } from "zod";

const moviesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish().optional(),
  duration: z.number().positive().int(),
  price: z.number().positive().int(),
});

const movieSchemaRequest = moviesSchema.omit({ id: true });

const movieSchemaResponse = moviesSchema;

const listAllMoviesSchemaResponse = z.array(moviesSchema);

const updateMovieSchema = movieSchemaRequest.partial();

export {
  moviesSchema,
  movieSchemaRequest,
  movieSchemaResponse,
  listAllMoviesSchemaResponse,
  updateMovieSchema,
};
