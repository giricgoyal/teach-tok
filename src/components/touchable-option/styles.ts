import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  touchableOption: {
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    // opacity: 0.5,
    gap: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    height: "auto",
  },
  optionLabel: {
    flex: 1,
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 21,
    marginVertical: 12,
  },
  correctOption: {
    backgroundColor: "#28B18FB2",
  },
  wrongOption: {
    backgroundColor: "#DC5F5FB2",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  icon: {
    width: 35,
    height: 52,
  },
  correctIcon: {
    top: -10,
    transform: "rotateY(-180deg)",
  },
  wrongIcon: {
    top: 10,
    transform: "rotateY(-180deg), rotateX(-180deg)",
  },
});
