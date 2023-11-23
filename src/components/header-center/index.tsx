import { View, Text } from "react-native";
import { Props } from "./types";
import { styles } from "./styles";

export default function HeaderCenter(props: Props) {
  const { title } = props;

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{title}</Text>
      <View style={styles.bottomLineContainer}>
        <View style={styles.bottomLine}></View>
      </View>
    </View>
  );
}
