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

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.homeScreenWrapper}>
      <Image
        style={{
          resizeMode: "cover",
          width: width,
          height: height,
        }}
        source={bg}
      />
      <View style={styles.overlay}>
        <Text style={styles.headerText}>Welcome to this site</Text>
      </View>
      <View style={styles.mainWrapper}>
        <View style={styles.main}>
          <View style={styles.news}>
            <Text style={styles.headerText}>Main Content</Text>
            <Text style={styles.contentText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              quas, exercitationem ad ullam aut nisi nihil provident laborum
              sapiente laboriosam veniam impedit eos placeat facere rem, dicta
              rerum doloremque. Doloribus.
            </Text>
          </View>

          <View style={styles.dashboard}>
            <Text style={styles.headerText}>Main Content</Text>
            <Text style={styles.contentText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              quas, exercitationem ad ullam aut nisi nihil provident laborum
              sapiente laboriosam veniam impedit eos placeat facere rem, dicta
              rerum doloremque. Doloribus.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScreenWrapper: {
    flex: 1,
  },
  mainWrapper: {
    flexGrow: 1,
    backgroundColor: "white",
    position: "absolute",
    width: width,
    height: height,
    display: "flex",
    justifyContent: "center",
    top: height / 2.5,
    
  },
  main: {
    flexGrow: 1,
    padding: 16,
    top: -32,
    position: "absolute",
    gap: 16
  },
  news: {
    flexGrow: 1,

    backgroundColor: "#e91e63",
  },
  dashboard: {
    flexGrow: 1,
    position: "",
    backgroundColor: "gray",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingTop: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    fontFamily: "Droid-Sans-Mono"
  },
  contentText: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
    marginTop: 8,
  },
});

export default HomeScreen;
