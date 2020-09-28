import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
// import {  } from "react-native-gesture-handler";
// import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

export default function Card(props) {
  return (
    <TouchableOpacity
      onPress={() => props.func}
      style={{ width: 400, height: 150, marginTop: 40 }}
    >
      <ImageBackground {...props} style={styles.card} imageStyle={styles.image}>
        <View style={styles.cardContent}>
          {/* Whenever we use Card() we pass in its children, which are <text> tags withiin Card */}
          {props.children}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    // borderRadius: 20,
    // elevation: 3,
    // backgroundColor: "#fff",
    // shadowOffset: { width: 1, height: 1 },
    // shadowColor: "#333",
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // marginHorizontal: 4,
    // marginVertical: 10,
    height: "100%",
    // alignItems: "center",
    width: "90%",
    // // resizeMode: "cover",
  },
  cardContent: {
    // marginHorizontal: 18,
    // marginVertical: 10,
    // fontSize: 20,
  },
  image: {
    borderRadius: 6,
    // height: 100,
    // width: 100,
  },
});
