import globalStyles from "../../styles/globalStyles";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Dashboard = () => {
  return (
    <ScrollView
      contentContainerStyle={localStyles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={localStyles.dashboardWrapper}>
        <View style={globalStyles.headingXLContainer}>
          <Text style={globalStyles.H2}>Översikt</Text>
        </View>
        <View style={localStyles.dashboardContainer}>
          <View style={globalStyles.headingXLContainer}>
            <Text style={globalStyles.H3}>Kommande aktiviteter</Text>
          </View>
          <ScrollView
            contentContainerStyle={localStyles.horizontalScrollView}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta libero totan.
              </Text>
            </View>
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta libero totan.
              </Text>
            </View>
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorddem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta libero totan.
              </Text>
            </View>
          </ScrollView>
          
        </View>
        
        
      </View>
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  dashboardContainer: {
    paddingBottom: height, // Adjust this value as needed
  },
  horizontalScrollView: {
    paddingVertical: 12,
  },
  dashboardWrapper: {
    height: 240,
    paddingVertical: 12,

    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  dashboardItem: {
    marginLeft: 24,
    padding: 24,
    marginVertical: 24,
    backgroundColor: "white",
    borderRadius: 12,
    width: width / 1.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
});

export default Dashboard;
