import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import BottomTabNavigator from "./components/BottomTabNavigator";
import styles from "./styles/globalStyles";
import globalStyles from "./styles/globalStyles";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
