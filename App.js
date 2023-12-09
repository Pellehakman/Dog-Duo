import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./components/BottomTabNavigator";

import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.root}>
      <NavigationContainer style={styles.text}>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    fontFamily: "Sofia Sans",
  },
  text: {
    fontFamily: "Sofia Sans",
  },
});

export default App;
