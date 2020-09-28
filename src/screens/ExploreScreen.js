import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function ExploreScreen() {
  const exploreList = require("./exploreList.json");

  return (
    <ScrollView>
      {exploreList.map((item) => (
        <TouchableOpacity style={{ width: 400, height: 150, marginTop: 40 }}>
          <ImageBackground
            source={{ uri: item.uri }}
            style={styles.card}
            imageStyle={styles.imageBox}
          >
            <Text style={styles.text1}>{item.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "90%",
  },
  imageBox: {
    borderRadius: 6,
  },
  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Quicksand_500Medium",
    left: 20,
    top: 10,
  },
});
