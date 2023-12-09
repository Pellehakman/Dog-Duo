import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import bg from "../assets/bg.webp";
import styles from '../styles/commonStyles';

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image
        style={{
          resizeMode: "cover",
          width: width,
          height: height,
        }}
        source={bg}
      />
      <View style={styles.overlay}>
        <Text style={styles.textHeading2XL}>Welcome to this site</Text>
      </View>
      <View style={styles.mainWrapper}>
        <View style={styles.main}>
          <View style={styles.news}>
            <Text style={styles.textHeadingXL}>Main Content</Text>
            <Text style={styles.textBody}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              quas, exercitationem ad ullam aut nisi nihil provident laborum
              sapiente laboriosam veniam impedit eos placeat facere rem, dicta
              rerum doloremque. Doloribus.
            </Text>
          </View>

          <View style={styles.dashboard}>
            <Text style={styles.textHeadingXL}>Dashboard</Text>
            <Text style={styles.textBody}>
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

export default HomeScreen;
