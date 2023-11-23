import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 5,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    lineHeight: 22,
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  bottomLineContainer: {
    gap: 10,
    display: "flex",
    alignItems: "center",
  },
  bottomLine: {
    width: 30,
    height: 4,
    backgroundColor: "#ffffff",
  },
});
