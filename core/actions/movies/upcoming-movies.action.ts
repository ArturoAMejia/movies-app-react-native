import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";

export const upcomingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming");
    // console.log(data);

    const movies = data.results.map(MovieMapper.fromTMDBToMovie);
    // console.log(movies);
    return movies;
  } catch (error) {
    throw "Can't now playing movies";
  }
};
