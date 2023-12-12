import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import DashboardItem from "./DashboardItem";
import globalStyles from "../../styles/globalStyles";

const { height } = Dimensions.get("window");

const Dashboard = () => {
  // Dummy data for illustration purposes
  const items = Array.from({ length: 3 }, (_, index) => `Item ${index + 1}`);

  return (
    <ScrollView contentContainerStyle={localStyles.dashboard}>
      {items.map((item, index) => (
        <View key={index}>
          <View style={globalStyles.headingXLContainer}>
            <Text style={globalStyles.H3}>Kommande aktiviteter</Text>
          </View>
          <ScrollView
            contentContainerStyle={localStyles.dashboard}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <DashboardItem />
            <DashboardItem />
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  dashboard: {
    flexGrow: 1,
  },
  item: {
    backgroundColor: "red",
  },
});

export default Dashboard;
