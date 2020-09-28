import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabScreen from "./Nav/MainTabScreen";
import DrawerContent from "./Nav/CustomDrawer/DrawerContent";
import Icon from "react-native-vector-icons/Ionicons";

//Stack that holds intro page and then the rest of Navigation

const IntroScreen = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeview}>
        <ScrollView
          style={styles.scrollview}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <View style={{ width, height }}>
            <Text>Screen 1</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 2</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 3</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 4</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 5</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const MainScreen = () => (
  <Drawer.Navigator drawerContent={DrawerContent}>
    <Drawer.Screen
      name="Home"
      component={BottomTabScreen}
      options={{
        title: "Overview",
        headerLeft: () => <Icon.Button name="md-menu" size={25} />,
      }}
    />
  </Drawer.Navigator>
);

//export to App.js
const MainStack = () => (
  
);

export default MainStack;

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
  },
});
