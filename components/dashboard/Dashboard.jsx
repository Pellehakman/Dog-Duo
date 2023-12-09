import styles from "../../styles/commonStyles";
import { View, Text, ScrollView } from "react-native";

const Dashboard = () => {
  return (
    <View style={{ flex: "1" }}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainWrapper}>
          <View style={styles.main}></View>
          <View style={styles.dashboardContainer}>
            <View style={styles.dashboardItemContainer}>
              <Text style={styles.textHeadingXLBlack}>Kommande</Text>
              <ScrollView
                contentContainerStyle={{ width: "100%", flexDirection: "row" }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.dashboardItem}>
                  <Text style={styles.textBodyBlack}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta libero totam, aut error ipsa, adipisci, doloribus vel
                    delectus fugiat ut mollitia eligendi eius? Nisi temporibus
                    animi hic, ex nulla voluptas.
                  </Text>
                </View>
                <View style={styles.dashboardItem}>
                  <Text style={styles.textBodyBlack}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta libero totam, aut error ipsa, adipisci, doloribus vel
                    delectus fugiat ut mollitia eligendi eius? Nisi temporibus
                    animi hic, ex nulla voluptas.
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
