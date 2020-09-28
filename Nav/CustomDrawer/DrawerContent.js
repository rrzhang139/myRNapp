import React from "react";
import { StyleSheet, View, useState } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import HomeScreenStack from "../HomeScreenStack";
// import FavoritesScreen from "../../src/screens/FavoritesScreen";
// import ProfileScreen from "../../src/screens/ProfileScreen";
// import Settings from "../../src/screens/Settings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
// onPress={() => {
//   toggleTheme();
// }}
// const toggleTheme = () => {};

//A function that returns JSX is going to be in customized drawer navigator
//Passes the navigation object
export default DrawerContent = (props) => {
  const { navigation } = props;
  const paperTheme = useTheme();
  // const [isDark, setTheme] = useState(false);
  return (
    <View style={styles.drawer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={require("../../src/img/burgerAvatar.jpeg")}
            size={50}
          ></Avatar.Image>
          <View>
            <Title>Richard Zhang</Title>
            <Caption>@richard-zhang-30</Caption>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Home"
            icon={({ color, size }) => (
              <Icon name="home-outline" size={size} color={color} />
            )}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            label="Favorites"
            icon={({ color, size }) => (
              <Icon name="star-outline" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate("Favorites")}
          />
          <DrawerItem
            label="Profile"
            icon={({ color, size }) => (
              <Icon name="account-outline" size={size} color={color} />
            )}
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            label="Settings"
            icon={({ color, size }) => (
              <Icon name="cogs" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate("Settings")}
          />
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <TouchableRipple>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  drawer: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  preferences: {
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  userInfoSection: {
    paddingLeft: 20,
    marginVertical: 10,
    borderBottomColor: "gray",
  },
});
