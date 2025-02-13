import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
    // console.log(data);

    const movies = data.results.map(MovieMapper.fromTMDBToMovie);
    // console.log(movies);
    return movies;
  } catch (error) {
    throw "Can't now playing movies";
  }
};
