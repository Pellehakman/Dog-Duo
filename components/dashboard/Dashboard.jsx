import styles from "../../styles/commonStyles";
import { View, Text, ScrollView } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.dashboardItemContainer}>
        <Text style={styles.textHeadingXLBlack}>Kommande</Text>
        <ScrollView
          contentContainerStyle={styles.dashboardContainer}
          horizontal // Enable horizontal scrolling for dashboard items
        >
          <View style={styles.dashboardItem}>
            <Text style={styles.textBodyBlack}>
              hej
            </Text>
          </View>
          <View style={styles.dashboardItem}>
            <Text style={styles.textBodyBlack}>
             hej
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardItemContainer}>
        <Text style={styles.textHeadingXLBlack}>Kommande</Text>
        <View style={styles.dashboardItem}>
          <Text style={styles.textBodyBlack}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            quas, exercitationem ad ullam aut nisi nihil provident
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
