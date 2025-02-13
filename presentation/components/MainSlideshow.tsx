import { View, Text, Dimensions, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import { IMovie } from "@/infraestructure/interfaces/movie.interface";

import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import Poster from "./Poster";
interface Props {
  movies: IMovie[];
}

Dimensions.get("screen").width;

const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);

  const width = useWindowDimensions().width;
  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          // <Text className="text-white">{item.title}</Text>
          <Poster id={item.id} image={item.poster} />
        )}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlideshow;
