import { View, Text } from "react-native";
import { Props } from "./types";
import { styles } from "./styles";
import { Image } from "expo-image";

export default function HeaderLeft(props: Props) {
  const { elapsedTime } = props;
  return (
    <View style={[styles.container]}>
      <Image
        source={require("src/assets/activity.png")}
        style={styles.timerIcon}
      />
      <Text style={styles.timerText}>{elapsedTime}m</Text>
    </View>
  );
}
