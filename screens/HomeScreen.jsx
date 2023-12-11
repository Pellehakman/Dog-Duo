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
import globalStyles from "../styles/globalStyles";
import News from "../components/news/News";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View>
      <Image style={globalStyles.backgroundImage} source={bg} />

      <View style={globalStyles.headingContainer}>
        <Text style={globalStyles.H1}>Välkommen tillbaka</Text>
      </View>
      <News />
      <View style={globalStyles.headingXLContainer}>
        <Text style={globalStyles.H2}>Översikt</Text>
      </View>
      <Dashboard />
    </View>
  );
};

export default HomeScreen;
