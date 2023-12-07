import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen.jsx';
import DetailsScreen from '../screens/UserScreen.jsx';
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Home" component={DetailsScreen} />
      </Tab.Navigator>
    );
  }

  export default MyTabs;