import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-movie-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    return MovieMapper.fromTMDBToCompleteMovie(data);
  } catch (error) {
    throw "Can't find this movie";
  }
};
