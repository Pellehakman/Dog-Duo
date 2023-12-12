import globalStyles from "../../styles/globalStyles";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const DashboardItem = () => {
  return (
    <View style={localStyles.dashboardItem}>
      <Text style={globalStyles.textBodyBlack}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero
        totan.
      </Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  dashboardWrapper: {
    paddingVertical: 12,

    flexDirection: "column",
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

export default DashboardItem;
