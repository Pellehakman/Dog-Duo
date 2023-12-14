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
        theme={{
          backgroundColor: "#F3F3F3",
          calendarBackground: "#F3F3F3",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "blue",
          indicatorColor: "blue",
          textDayFontFamily: "Sofia Sans",
          textMonthFontFamily: "Sofia Sans",
          textDayHeaderFontFamily: "Sofia Sans",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
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
