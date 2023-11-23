import { View, Text } from "react-native";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Props } from "./types";

export default function ActionBar(props: Props) {
  const { avatar } = props;

  return (
    <View style={styles.actionBar}>
      <View style={styles.actionBarItem}>
        <Image source={avatar} style={styles.favouriteIcon} />
        <View style={styles.addIcon}>
          <Text style={styles.addIconText}>+</Text>
        </View>
      </View>
      <View style={styles.actionBarItem}>
        <Image
          source={require("src/assets/like.png")}
          style={styles.actionBarItemIcon}
        />
        <Text style={styles.actionBarItemLabel}>87</Text>
      </View>
      <View style={styles.actionBarItem}>
        <Image
          source={require("src/assets/comments.png")}
          style={styles.actionBarItemIcon}
        />
        <Text style={styles.actionBarItemLabel}>2</Text>
      </View>
      <View style={styles.actionBarItem}>
        <Image
          source={require("src/assets/bookmark.png")}
          style={styles.actionBarItemIcon}
        />
        <Text style={styles.actionBarItemLabel}>203</Text>
      </View>
      <View style={styles.actionBarItem}>
        <Image
          source={require("src/assets/share.png")}
          style={styles.actionBarItemIcon}
        />
        <Text style={styles.actionBarItemLabel}>17</Text>
      </View>
    </View>
  );
}
