import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import ChatScreen from './screens/ChatScreen';
import ExploreScreen from './screens/ExploreScreen';
import CalenderScreen from './screens/CalenderScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="h" component={HomeScreen} />
        <Tab.Screen name="u" component={UserScreen} />
        <Tab.Screen name="c" component={ChatScreen} />
        <Tab.Screen name="e" component={ExploreScreen} />
        <Tab.Screen name="ca" component={CalenderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
