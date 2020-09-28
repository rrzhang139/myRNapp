import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableHighlight,
  Image,
  BackgroundImage,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabScreen from "./Nav/MainTabScreen";
import DrawerContent from "./Nav/CustomDrawer/DrawerContent";
import Icon from "react-native-vector-icons/Ionicons";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import {
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
  BalsamiqSans_700Bold,
  BalsamiqSans_700Bold_Italic,
} from "@expo-google-fonts/balsamiq-sans";
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import AppIntroSlider from "react-native-app-intro-slider";
const Drawer = createDrawerNavigator();
import { AppLoading } from "expo";
import HomeScreen from "./src/screens/HomeScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import Settings from "./src/screens/Settings";

//Drawer is OP
export default function App() {
  const [showRealApp, setRealApp] = useState(true);
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });
  useEffect(() => {
    setRealApp(showRealApp);
  }, [showRealApp]);

  if (!fontsLoaded) {
    console.log("not loaded");
    return <AppLoading />;
  }

  const slides = [
    {
      key: 1,
      title: "Title 1",
      text: "Description.\nSay something cool",
      image: require("./src/img/download.jpeg"),
      backgroundColor: "#59b2ab",
    },
    {
      key: 2,
      title: "Title 2",
      text: "Other cool stuff",
      image: require("./src/img/salad.jpeg"),
      backgroundColor: "#febe29",
    },
    {
      key: 3,
      title: "Rocket guy",
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require("./src/img/salmon.jpeg"),
      backgroundColor: "#22bcb5",
    },
  ];

  //NavigationContainer is a component which manages our navigation tree and contains the navigation state.
  const _renderItem = ({ item, dimensions }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Text style={styles.introTitle}>{item.title}</Text>
        <Image style={styles.introImage} source={item.image} />
        <Text style={styles.introText}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    setRealApp(false);
  };

  if (showRealApp) {
    return (
      <AppIntroSlider data={slides} renderItem={_renderItem} onDone={_onDone} />
    );
  } else {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen
              name="Main"
              component={BottomTabScreen}
              options={{
                title: "Overview",
                headerLeft: () => <Icon.Button name="md-menu" size={25} />,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  introText: {
    color: "#333",
    marginTop: 92,
    textAlign: "center",
  },
  introTitle: {
    fontSize: 30,
    fontStyle: "italic",
    fontFamily: "Roboto_700Bold",
  },
  introImage: {
    resizeMode: "cover",
  },
  introPage: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  safeview: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
  },
});
