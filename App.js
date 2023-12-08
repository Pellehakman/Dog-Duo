import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faUser, faComments, faSearch, faCalendar } from '@fortawesome/free-solid-svg-icons';

import DashboardScreen from './screens/DashboardScreen';
import UserScreen from './screens/UserScreen';
import ChatScreen from './screens/ChatScreen';
import ExploreScreen from './screens/ExploreScreen';
import CalenderScreen from './screens/CalenderScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let icon;

            if (route.name === 'dashboard') {
              icon = faHouse;
            } else if (route.name === 'user') {
              icon = faUser;
            } else if (route.name === 'chat') {
              icon = faComments;
            } else if (route.name === 'explore') {
              icon = faSearch;
            } else if (route.name === 'calender') {
              icon = faCalendar;
            }

            // Use the focused property to determine if the tab is active
            const iconColor = focused ? 'white' : 'black';

            return (
              <FontAwesomeIcon
                icon={icon}
                size={20}
                color={iconColor}
               
              />
            );
          },
          tabBarLabel: '', // Set tabBarLabel to an empty string to hide the label
          tabBarStyle: {
            height: 80,
            paddingHorizontal: 8,
            borderRadius: 4,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: 'white',
            borderTopWidth: 0,
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: '#EB0A5D',
          activeTintColor: 'black', // Set the color when the tab is active
        }}
      >
        <Tab.Screen name="dashboard" component={DashboardScreen} />
        <Tab.Screen name="calender" component={CalenderScreen} />
        <Tab.Screen name="explore" component={ExploreScreen} />
        <Tab.Screen name="chat" component={ChatScreen} />
        <Tab.Screen name="user" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
