import globalStyles from "../../styles/globalStyles";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import DashboardItem from "./DashboardItem";

const { width, height } = Dimensions.get("window");

const Dashboard = () => {
  return (
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
    </ScrollView>
  );
};

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
  },
});

export default Dashboard;
