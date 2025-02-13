import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page,
      },
    });
    // console.log(data);

    const movies = data.results.map(MovieMapper.fromTMDBToMovie);

    return movies;
  } catch (error) {
    throw "Can't now playing movies";
  }
};
