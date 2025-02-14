import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

interface Props {
  poster?: string;
  originalTitle?: string;
  title?: string;
}

const MovieHeader = ({ originalTitle, poster, title }: Props) => {
  const { height } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={{
          height: height * 0.3,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9,
          elevation: 9,
        }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 999,
          elevation: 9,
          top: 50,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={"white"}
            className="shadow"
          />
        </Pressable>
      </View>
      <View
        style={{
          height: height * 0.7,
        }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{
              uri: poster,
            }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
        <View className="px-5 mt-5">
          <Text className="font-normal text-white">{originalTitle}</Text>
          <Text className="font-semibold text-2xl text-white">{title}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
