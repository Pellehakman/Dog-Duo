import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import bg from "../assets/bg.webp";
import styles from "../styles/commonStyles";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image style={styles.backgroundImage} source={bg} />

      <View style={styles.headingContainer}>
        <Text style={styles.textHeading2XL}>Välkommen tillbaka</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainWrapper}>
          <View style={styles.main}>
            <View style={styles.newsContainer}>
              <Text style={styles.textHeadingXL}>Main Content</Text>
              <Text style={styles.textBody}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione quas, exercitationem ad ullam aut nisi nihil provident
                laborum sapiente.
              </Text>
            </View>

            <View style={styles.dashboardContainer}>
              <View style={styles.dashboardItemContainer}>
                <Text style={styles.textHeadingXLBlack}>Kommande</Text>
                <ScrollView
                  contentContainerStyle={styles.dashboardContainer}
                  horizontal // Enable horizontal scrolling for dashboard items
                >
                  <View style={styles.dashboardItem}>
                    <Text style={styles.textBodyBlack}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione quas, exercitationem ad ullam aut nisi nihil
                      provident
                    </Text>
                  </View>
                  <View style={styles.dashboardItem}>
                    <Text style={styles.textBodyBlack}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione quas, exercitationem ad ullam aut nisi nihil
                      provident
                    </Text>
                  </View>
                </ScrollView>
              </View>
              <View style={styles.dashboardItemContainer}>
                <Text style={styles.textHeadingXLBlack}>Kommande</Text>
                <View style={styles.dashboardItem}>
                  <Text style={styles.textBodyBlack}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione quas, exercitationem ad ullam aut nisi nihil
                    provident
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
