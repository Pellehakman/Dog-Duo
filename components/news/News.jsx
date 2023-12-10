import { View, Text, StyleSheet, Pressable } from "react-native";
import globalStyles from "../../styles/globalStyles";
import { Button } from "react-native-web";

const News = () => {
  const title = "Utforska";
  return (
    <View style={styling.newsContainer}>
      <Text style={globalStyles.H2}>Nyheter</Text>
      <Text style={globalStyles.textBody}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Text>
      <View>
        <Pressable onPress={() => {}}>
          <Text style={styling.text}>{title}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styling = StyleSheet.create({
  newsContainer: {
    zIndex: 1000,
    margin: 24,
    padding: 24,
    borderRadius: 12,
    backgroundColor: "#e91e63",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    position: "relative",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: "auto", // Set width to auto to adjust based on content
    height: "auto", // Set height to auto to adjust based on content
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default News;
