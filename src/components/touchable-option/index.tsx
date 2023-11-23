import { Image } from "expo-image";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "src/components/touchable-option/styles";
import { Props } from "src/components/touchable-option/types";

export default function TouchableOption(props: Props) {
  const { allowPress, label, id, isPressed, isCorrect, onPress } = props;
  const handleOnPress = useCallback(() => {
    if (allowPress) {
      onPress(id);
    }
  }, [allowPress, id, onPress]);

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={[
        styles.touchableOption,
        isCorrect && styles.correctOption,
        isPressed && !isCorrect && styles.wrongOption,
      ]}
    >
      <Text style={styles.optionLabel}>{label}</Text>
      <View style={styles.iconContainer}>
        {isPressed && isCorrect && (
          <Image
            source={require("src/assets/correct.gif")}
            style={[styles.icon, styles.correctIcon]}
          />
        )}
        {isPressed && !isCorrect && (
          <Image
            source={require("src/assets/wrong.gif")}
            style={[styles.icon, styles.wrongIcon]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
