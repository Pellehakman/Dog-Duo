import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from "../styles/globalStyles";

const UserScreen = () => {
  return (
    <View style={globalStyles.container}>
    <View style={globalStyles.headingContainer}>
      <Text style={[globalStyles.H1, { color: "black" }]}>Profil</Text>
    </View>
    </View>
  );
};

export default UserScreen;