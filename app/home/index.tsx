import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (
    nowPlayingQuery.isLoading ||
    popularQuery.isLoading ||
    topRatedQuery.isLoading
  ) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <ScrollView className={"bg-black"}>
      <View
        className="mt-2 mb-10"
        style={{
          paddingTop: safeArea.top,
          paddingBottom: safeArea.bottom,
          paddingLeft: safeArea.left,
          paddingRight: safeArea.right,
        }}
      >
        <Text className="text-white text-5xl font-bold my-4 text-center">
          Movies App
        </Text>

        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList
          title="Popular movies"
          movies={popularQuery.data ?? []}
        />

        <MovieHorizontalList
          title="Top rated movies"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <MovieHorizontalList
          title="Upcoming movies"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
