import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollXview: {},
  H1: {
    fontSize: 48,
    color: "white",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
  },
  H2: {
    fontSize: 32,
    color: "white",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
    },
  H3: {
    fontSize: 26,
    color: "white",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
  },
  textHeadingXLBlack: {
    fontSize: 20,
    color: "black",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  textBody: {
    fontSize: 16,
    color: "white",
    fontFamily: "Sofia Sans",
    fontWeight: "400",
  },
  textBodyBlack: {
    fontSize: 16,
    color: "black",
    fontFamily: "Sofia Sans",
    fontWeight: "400",
  },
  headingContainer: {
    paddingTop: 32,
    paddingHorizontal: 32,
  },
  headingXLContainer: {
    paddingHorizontal: 32,
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    resizeMode: "cover",
  },
});
