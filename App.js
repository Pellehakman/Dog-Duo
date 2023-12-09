import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import BottomTabNavigator from "./components/BottomTabNavigator";
import styles from "./styles/commonStyles";

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
