import React from "react";
import { View, Text, Button } from "react-native";
import globalStyles from "../styles/globalStyles";

const ExploreScreen = () => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headingContainer}>
        <Text style={[globalStyles.H1, { color: "black" }]}>Utforska</Text>
      </View>
    </View>
  );
};

export default ExploreScreen;
