'use strict';
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeading2XL: {
    fontSize: 38,
    color: "black",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
  },
  textHeadingXL: {
    fontSize: 26,
    color: "black",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
  },
  textBody: {
    fontSize: 16,
    color: "black",
    fontFamily: "Sofia Sans",
    fontWeight: "400",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingTop: 24,
  },
  news: {
    flexGrow: 1,
    backgroundColor: "#e91e63",
  },
  dashboard: {
    flexGrow: 1,
    position: "",
    backgroundColor: "gray",
  },
  mainWrapper: {
    flexGrow: 1,
    backgroundColor: "white",
    position: "absolute",
    width: width,
    height: height,
    display: "flex",
    justifyContent: "center",
    top: height / 2.5,
  },
  main: {
    flexGrow: 1,
    padding: 16,
    top: -32,
    position: "absolute",
    gap: 16,
  },
});


