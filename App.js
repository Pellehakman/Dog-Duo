import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome, // Changed from faCalendar to faHome
  faUser,
  faMessage,
  faSearch,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

import DashboardScreen from "./screens/DashboardScreen";
import UserScreen from "./screens/UserScreen";
import ChatScreen from "./screens/ChatScreen";
import ExploreScreen from "./screens/ExploreScreen";
import CalenderScreen from "./screens/CalenderScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={DashboardScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={size} /> // Changed from faCalendar to faHome
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={UserScreen}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faMessage} color={color} size={size} /> // Use the correct icon
            ),
            tabBarBadge: 1,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ChatScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={size} /> // Use the correct icon
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
