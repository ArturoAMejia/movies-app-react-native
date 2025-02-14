import { View, Text, FlatList } from "react-native";
import React from "react";
import { CreditsResponse } from "@/infraestructure/interfaces/movie-credits-response.interface";
import { Cast } from "@/infraestructure/interfaces/movie-cast.interface";
import { ActorCard } from "./ActorCard";

interface Props {
  cast?: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <FlatList
      data={cast}
      renderItem={({ item }) => <ActorCard actor={item} />}
      keyExtractor={(item, i) => `${item.id}-${i}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-4"
    />
  );
};

export default MovieCast;
