import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

interface Props {
  id: number;
  image: string;
  smallPoster?: boolean;
  className?: string;
}

const Poster = ({ id, image, smallPoster = false, className }: Props) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: image }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 120 : 250,
          resizeMode: "cover",
        }}
      />
    </Pressable>
  );
};

export default Poster;
