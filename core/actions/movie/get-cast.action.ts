import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infraestructure/interfaces/movie-cast.interface";
import {
  CreditsResponse,
  MovieDBCast,
} from "@/infraestructure/interfaces/movie-credits-response.interface";
import { CastMapper } from "@/infraestructure/mappers/cast.mapper";

export const getCastAction = async (id: number | string): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    throw "Can't find this movie";
  }
};
