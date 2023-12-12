import React from "react";
import { View, Text, Dimensions } from "react-native";
import globalStyles from "../styles/globalStyles";
import { Calendar } from "react-native-calendars";

const { width, height } = Dimensions.get("window");

const CalenderScreen = () => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headingContainer}>
        <Text style={[globalStyles.H1, { color: "black" }]}>Kalender</Text>
      </View>
      <Calendar
        style={{ flex: 1 }}
        // Customize calendar props as needed
        // For example:
        markedDates={{
          "2023-01-01": { selected: true, marked: true, selectedColor: "blue" },
          "2023-01-15": { marked: true, dotColor: "red" },
          // Add more marked dates as needed
        }}
      />
    </View>
  );
};

export default CalenderScreen;
