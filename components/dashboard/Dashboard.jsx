import globalStyles from "../../styles/commonStyles";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Dashboard = () => {
  return (
    <View style={localStyles.dashboardWrapper}>
      <ScrollView
        contentContainerStyle={globalStyles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={localStyles.dashboardContainer}>
          <Text style={globalStyles.textHeadingXLBlack}>Kommande</Text>
          <ScrollView
            contentContainerStyle={{ width: "100%", flexDirection: "row" }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                libero totan.
              </Text>
            </View>
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                libero totan.
              </Text>
            </View>
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                libero totan.
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={localStyles.dashboardContainer}>
          <Text style={globalStyles.textHeadingXLBlack}>Kommande</Text>
          <ScrollView
            contentContainerStyle={{ width: "100%", flexDirection: "row" }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                libero totan.
              </Text>
            </View>
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                libero totan.
              </Text>
            </View>
            <View style={localStyles.dashboardItem}>
              <Text style={globalStyles.textBodyBlack}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                libero totan.
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const localStyles = StyleSheet.create({
  dashboardContainer: {
    width: width,
  },

  dashboardWrapper: {
    backgroundColor: "#F3F3F3",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  dashboardItem: {
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
