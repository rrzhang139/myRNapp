//Contains the Stack Screens that are inside the Tab Screen
//Result is imported into App.js
import React from "react";
import { NavigationActions } from "react-navigation";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../src/screens/HomeScreen";
import Settings from "../src/screens/Settings";
import ProfileScreen from "../src/screens/ProfileScreen";
import FavoritesScreen from "../src/screens/FavoritesScreen";
import ExploreScreen from "../src/screens/ExploreScreen";
import Header from "../shared/header";
const HomeStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// class ExtendStack extends React.Component {
//   static router = Tab.router;
//   render() {
//     const { navigation } = this.props;
//     return (
//       <Tab
//         navigation={navigation}
//         screenProps={navigation.state.params}
//       />
//     );
//   }
// }

//Tab encapsulates the HomeStack (a stack nav that holds homescreen) and SettingsStack(a stack that holds settingsscreen)
const BottomTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: "#e91e63",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesStackScreen}
      options={{
        tabBarLabel: "Favorites",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsStackScreen}
      options={{
        tabBarLabel: "Settings",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cogs" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabScreen;

// //HOME
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    initialRouteName="HomeScreen"
    headerMode="screen"
    screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "tomato" },
      headerTitleStyle: { fontFamily: "BalsamiqSans_700Bold", fontSize: 30 },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home",
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            backgroundColor="tomato"
            onPress={() => navigation.openDrawer()}
            size={25}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        title: "Explore",
        headerLeft: () => (
          <Icon.Button
            name="arrow-back-outline"
            backgroundColor="tomato"
            onPress={() => navigation.goBack()}
            size={25}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

//Favorites
const FavoritesStackScreen = ({ navigation }) => (
  <FavoritesStack.Navigator
    initialRouteName="FavoritesScreen"
    headerMode="screen"
    screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "tomato" },
      headerTitleStyle: { fontFamily: "BalsamiqSans_700Bold", fontSize: 30 },
    }}
  >
    <FavoritesStack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        title: "Favorites",
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            backgroundColor="tomato"
            onPress={() => navigation.openDrawer()}
            size={25}
          />
        ),
      }}
    />
  </FavoritesStack.Navigator>
);

//Profile
const ProfileStackScreen = ({ navigation, route }) => (
  <ProfileStack.Navigator
    initialRouteName="ProfileScreen"
    headerMode="screen"
    screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "tomato" },
      headerTitleStyle: { fontFamily: "BalsamiqSans_700Bold", fontSize: 30 },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: "Profile",
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            backgroundColor="tomato"
            onPress={() => navigation.openDrawer()}
            size={25}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

//SETTINGS
const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator
    initialRouteName="HomeScreen"
    headerMode="screen"
    screenOptions={{
      headerTintColor: "white",
      headerStyle: { backgroundColor: "tomato" },
      headerTitleStyle: { fontFamily: "BalsamiqSans_700Bold", fontSize: 30 },
    }}
  >
    <SettingsStack.Screen
      name="Settings"
      component={Settings}
      options={{
        title: "Settings",
      }}
    />
  </SettingsStack.Navigator>
);
