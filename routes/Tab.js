import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../src/screens/HomeScreen";
import Settings from "../src/screens/Settings";

export default MainTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: Settings,
  },
});
