import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import bg from "../assets/bg.webp";
import styles from "../styles/commonStyles";
import News from "../components/news/News";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={bg} />

      <View style={styles.headingContainer}>
        <Text style={styles.textHeading2XL}>Välkommen tillbaka</Text>
      </View>
      <News />
      
        <Dashboard />
     
    </View>
  );
};

export default HomeScreen;
