import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faMessage, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import HomeScreen from "../screens/HomeScreen"
import UserScreen from "../screens/UserScreen";
import ChatScreen from "../screens/ChatScreen";
import ExploreScreen from "../screens/ExploreScreen";
import CalenderScreen from "../screens/CalenderScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const iconWrapperStyle = (focused) => ({
    backgroundColor: focused ? "#e91e63" : "",
    borderRadius: 12,
    padding: 12,
  });

  const iconSize = 20;

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({}) => ({
        headerShown: false,
        tabBarLabel: "",
        tabBarStyle: {
          height: 100,
        },
        tabBarBadgeStyle: {
          position: "absolute",
          top: 20,
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={iconWrapperStyle(focused)}>
              <FontAwesomeIcon
                icon={faHome}
                color={focused ? "white" : "black"}
                size={iconSize}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CalenderScreen"
        component={CalenderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={iconWrapperStyle(focused)}>
              <FontAwesomeIcon
                icon={faCalendar}
                color={focused ? "white" : "black"}
                size={iconSize}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={iconWrapperStyle(focused)}>
              <FontAwesomeIcon
                icon={faSearch}
                color={focused ? "white" : "black"}
                size={iconSize}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={iconWrapperStyle(focused)}>
              <FontAwesomeIcon
                icon={faMessage}
                color={focused ? "white" : "black"}
                size={iconSize}
              />
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
              <FontAwesomeIcon
                icon={faUser}
                color={focused ? "white" : "black"}
                size={iconSize}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
