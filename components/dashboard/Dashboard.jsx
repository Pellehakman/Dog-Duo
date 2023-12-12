import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import DashboardItem from "./DashboardItem";

const { height } = Dimensions.get("window");

const Dashboard = () => {
  // Dummy data for illustration purposes
  const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  return (
<<<<<<< HEAD
    <ScrollView contentContainerStyle={styles.dashboard}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item}</Text>
        </View>
      ))}
=======
    <ScrollView
      contentContainerStyle={localStyles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* <View style={localStyles.dashboardWrapper}>
        <View style={localStyles.dashboardContainer}>
          <View style={globalStyles.headingXLContainer}>
            <Text style={globalStyles.H3}>Kommande aktiviteter</Text>
          </View>
          <ScrollView
            contentContainerStyle={localStyles.horizontalScrollView}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <DashboardItem />
            <DashboardItem />
          </ScrollView>
        </View>
        
      </View> */}
      <View>
        <Text>hej</Text>
      </View>
      <View>
        <Text>hej</Text>
      </View>
>>>>>>> 2ad43e9579abebc683ac235f2d2c7657bb1918f9
    </ScrollView>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  dashboard: {
    flexGrow: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
=======
const localStyles = StyleSheet.create({
  scrollViewContainer: {},
  dashboardContainer: {
    paddingBottom: height, // Adjust this value as needed
  },
  horizontalScrollView: {
    paddingVertical: 12,
  },
  dashboardWrapper: {
    paddingVertical: 12,
    display: "flex",

    flexDirection: "column",
>>>>>>> 2ad43e9579abebc683ac235f2d2c7657bb1918f9
  },
});

export default Dashboard;
