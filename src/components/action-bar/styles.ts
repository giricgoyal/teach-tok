import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  actionBar: {
    width: 60,
    gap: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  favouriteIcon: {
    height: 45,
    width: 45,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 50,
    boxShadow: "1px 1.5px 2px 0px #00000073",
  },
  addIcon: {
    position: "absolute",
    bottom: -5,
    height: 22,
    width: 22,
    borderRadius: 49,
    backgroundColor: "#28B18F",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  addIconText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#ffffff",
  },
  actionBarItem: {
    width: 60,
    gap: 2,
    display: "flex",
    flexDirection: "column",
    boxShadow: "1px 1.5px 2px 0px #00000073",
    alignItems: "center",
  },
  actionBarItemIcon: {
    height: 30,
    width: 30,
  },
  actionBarItemLabel: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    color: "#ffffff",
  },
});
