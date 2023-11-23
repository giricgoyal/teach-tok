import { View, Text } from "react-native";
import { Props } from "./types";
import { styles } from "./styles";
import { Image } from "expo-image";

export default function HeaderRight(props: Props) {
  return (
    <View style={[styles.container]}>
      <Image source={require("src/assets/search.png")} style={styles.image} />
    </View>
  );
}
