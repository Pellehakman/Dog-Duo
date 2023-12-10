import { View, Text, StyleSheet } from "react-native";
import styles from "../../styles/commonStyles";

const News = () => {
  return (
    <View style={styling.newsContainer}>
      <Text style={styles.textHeadingXL}>Nyheter</Text>
      <Text style={styles.textBody}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      </Text>
    </View>
  );
};

const styling = StyleSheet.create({
  newsContainer: {
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
});

export default News;
