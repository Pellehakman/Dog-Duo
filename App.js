import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./components/BottomTabNavigator";
import commonStyles from "../styles/commonStyles"; // Import commonStyles

import { View } from "react-native";

const App = () => {
  return (
    <View style={commonStyles.container}>
      {" "}
      {/* Use commonStyles for styling */}
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
