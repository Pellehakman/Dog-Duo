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
  textHeading2XL: {
    fontSize: 38,
    color: "white",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
  },
  textHeadingXL: {
    fontSize: 26,
    color: "white",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
    marginBottom: 8,
  },
  textHeadingXLBlack: {
    fontSize: 20,
    color: "black",
    fontFamily: "Sofia Sans",
    fontWeight: "900",
    marginVertical: 8,
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
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingTop: 32,
    paddingHorizontal: 32,
  },
  newsContainer: {
    flexGrow: 1,
    padding: 24,
    borderRadius: 12,
    backgroundColor: "#e91e63",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  dashboardContainer: {
    flexGrow: 1,
  },
  dashboardItemContainer: {},
  dashboardItem: {
    padding: 24,
    backgroundColor: "white",
    borderRadius: 12,
  },
  mainWrapper: {
    flexGrow: 1,
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    position: "absolute",
    width: width,
    height: height,
    display: "flex",
    justifyContent: "center",
    top: height / 2.5,
  },
  main: {
    flexGrow: 1,
    padding: 24,
    top: -56,
    position: "absolute",
    gap: 16,
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
