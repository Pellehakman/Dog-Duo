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
          tabBarLabel: "",
          tabBarActiveBackgroundColor: "#e91e63"
          
          
        }}
      >
        <Tab.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
           
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={size} /> 
            ),
          }}
        />
        <Tab.Screen
          name="CalenderScreen"
          component={CalenderScreen}
          options={{
          
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faCalendar} color={color} size={size} /> 
            )
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
           
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faSearch} color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
           
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faMessage} color={color} size={size} /> // Use the correct icon
            )
            ,
            tabBarBadge: 6,
          }}
        />
         <Tab.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
           
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
