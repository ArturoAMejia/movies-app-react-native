import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { IMovie } from "@/infraestructure/interfaces/movie.interface";
import Poster from "@/presentation/components/movies/Poster";

interface Props {
  title?: string;
  movies: IMovie[];
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    console.log("Cargar más películas");
    loadNextPage && loadNextPage();
  };
  return (
    <View>
      {title && (
        <Text className="text-white text-3xl font-bold my-6 text-center">
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Poster id={item.id} image={item.poster} smallPoster />
        )}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
