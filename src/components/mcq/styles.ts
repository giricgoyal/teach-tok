import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    paddingTop: 100,
    backgroundColor: "#00000073",
  },
  screen: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  container: {
    gap: 12,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    paddingRight: 8,
    paddingLeft: 16,
  },
  playlistFooter: {
    backgroundColor: "#161616",
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  playlistInfo: {
    gap: 4,
    display: "flex",
    flexDirection: "row",
  },
  playlistText: {
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 16,
    color: "#ffffff",
  },
  playlistImage: {
    width: 20,
    height: 16,
  },
  chevronRightImage: {
    height: 16,
    width: 11,
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    gap: 24,
    height: "100%",
  },
  qaContainer: {
    gap: 24,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  descriptionContainer: {
    gap: 6,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 18,
    color: "#ffffff",
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 16,
    color: "#ffffff",
  },
  questionContainer: {
    paddingTop: 40,
    paddingBottom: 40,
    flex: 1,
    gap: 10,
  },
  questionText: {
    fontWeight: "500",
    fontSize: 22,
    lineHeight: 27,
    color: "#ffffff",
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#00000099",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});
