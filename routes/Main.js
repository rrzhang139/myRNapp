import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../src/screens/HomeScreen";
import Settings from "../src/screens/Settings";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: Settings,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
    },
  }
);

const MainContainer = createAppContainer(MainNavigator);

export default MainContainer;
