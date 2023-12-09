import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import {
  faHome,
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
  const iconWrapperStyle = (focused) => ({
    backgroundColor: focused ? "#e91e63" : "", // Set your desired active and inactive background colors
    borderRadius: 15, // Set your desired border radius
    padding: 10, // Adjust padding as needed
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
        
          headerShown: false,
          tabBarLabel: "",
       
        })}
      >
        <Tab.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <View style={iconWrapperStyle(focused)}>
                <FontAwesomeIcon icon={faHome} color={focused ? 'white' : 'black'} size={size} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CalenderScreen"
          component={CalenderScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <View style={iconWrapperStyle(focused)}>
                <FontAwesomeIcon icon={faCalendar} color={focused ? 'white' : 'black'} size={size} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <View style={iconWrapperStyle(focused)}>
                <FontAwesomeIcon icon={faSearch} color={focused ? 'white' : 'black'} size={size} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <View style={iconWrapperStyle(focused)}>
                <FontAwesomeIcon icon={faMessage} color={focused ? 'white' : 'black'} size={size} />
              </View>
            ),
            tabBarBadge: 6,
          }}
        />
        <Tab.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={iconWrapperStyle(focused)}>
                <FontAwesomeIcon icon={faUser} color={focused ? 'white' : 'black'} size={size} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
