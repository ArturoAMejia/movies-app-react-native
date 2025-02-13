import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularAction } from "@/core/actions/movies/popular-movies.action";
import { topRatedAction } from "@/core/actions/movies/top-rated-movies.action";
import { upcomingAction } from "@/core/actions/movies/upcoming-movies.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "top_rated"],
    queryFn: ({ pageParam }) => {
      return topRatedAction({ page: pageParam, limit: 20 });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
