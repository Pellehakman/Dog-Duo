import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screedn</Text>
      <FontAwesomeIcon icon={ faMugSaucer } />
    
    </View>
  );
};



export default DashboardScreen;
