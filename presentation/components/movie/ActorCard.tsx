import { Cast } from "@/infraestructure/interfaces/movie-cast.interface";
import { Image, Text, View } from "react-native";

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  return (
    <View className="mx-10 w-[60px] mb-10">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="font-bold text-lg text-white"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-100 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};
