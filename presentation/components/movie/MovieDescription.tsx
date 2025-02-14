import { View, Text } from "react-native";
import React from "react";
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface";
import { Formatter } from "@/config/helpers/formatter";

interface Props {
  movie?: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text className="text-white font-semibold">{movie?.rating}</Text>
        <Text className="text-white font-bold">
          {" "}
          - {movie?.genres.join(", ")}
        </Text>
      </View>
      <Text className="text-white mt-4 font-bold text-3xl">Story</Text>
      <Text className="text-white mt-4">{movie?.description}</Text>
      <Text className="text-white mt-4 font-bold text-3xl">Budget</Text>
      <Text className="text-white mt-4">
        {Formatter.currency(movie?.budget || 0)}
      </Text>
    </View>
  );
};

export default MovieDescription;
