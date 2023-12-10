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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Pressable style={styling.button} onPress={() => {}}>
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
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,

    backgroundColor: "white", // Set the border color to white
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#e91e63",
  },
});

export default News;
