import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import DashboardItem from "./DashboardItem";

const { height } = Dimensions.get("window");

const Dashboard = () => {
  // Dummy data for illustration purposes
  const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  return (
    <ScrollView contentContainerStyle={styles.dashboard}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flexGrow: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Dashboard;
