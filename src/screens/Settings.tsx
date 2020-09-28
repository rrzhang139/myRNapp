import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Platform,
  RefreshControl,
  Switch,
} from "react-native";
import { TextInput } from "react-native-paper";
import {
  SettingsScreen,
  SettingsData,
  Chevron,
} from "react-native-settings-screen";
import Icon from "react-native-vector-icons/Entypo";
const fontFamily = Platform.OS === "ios" ? "Avenir" : "sans-serif";

export default class App extends React.Component {
  state = {
    refreshing: false,
    name: "Richard Zhang",
  };

  renderHero = () => (
    <View style={styles.heroContainer}>
      <Image
        source={require("../../src/img/burgerAvatar.jpeg")}
        style={styles.heroImage}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.heroTitle}>{this.state.name}</Text>
        <Text style={styles.heroSubtitle}>@richard-zhang-30</Text>
      </View>
      <Chevron />
    </View>
  );

  settingsData: SettingsData = [
    { type: "CUSTOM_VIEW", key: "hero", render: this.renderHero },
    {
      type: "SECTION",
      header: "My Section".toUpperCase(),
      footer:
        "Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      rows: [
        {
          title: "Followers and Following",
          showDisclosureIndicator: true,
        },
        {
          title: "This row has a",
          subtitle: "Subtitle",
          showDisclosureIndicator: true,
        },
        {
          title: "Dark Theme",
          renderAccessory: () => <Switch value onValueChange={() => {}} />,
        },
        {
          title: "Text",
          renderAccessory: () => (
            <TextInput
              style={{
                backgroundColor: "white",
                marginRight: 6,
                fontSize: 18,
                height: 45,
              }}
              placeholder={this.state.name}
              onChangeText={(text) =>
                this.setState({ ...this.state, name: text })
              }
            />
          ),
        },
        {
          title: "Custom view",
          renderAccessory: () => (
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "blue",
              }}
            />
          ),
          showDisclosureIndicator: true,
        },
      ],
    },
    {
      type: "SECTION",
      header: "My Other Section".toUpperCase(),
      rows: [
        {
          title: "Dolor Nullam",
          showDisclosureIndicator: true,
        },
        {
          title: "Nulla vitae elit libero",
          renderAccessory: () => (
            <Text style={{ color: "#999", marginRight: 6, fontSize: 18 }}>
              Dapibus
            </Text>
          ),
        },
        {
          title: "Ipsum Lorem Venenatis",
          subtitle: "Vestibulum Inceptos Fusce Justo",
          renderAccessory: () => (
            <Text style={{ color: "#999", marginRight: 6, fontSize: 18 }}>
              Yes
            </Text>
          ),
          showDisclosureIndicator: true,
        },
        {
          title: "Cras Euismod",
          renderAccessory: () => (
            <Icon
              style={{ marginTop: 3, marginRight: 6 }}
              name="colours"
              size={32}
              color="black"
            />
          ),
          showDisclosureIndicator: true,
        },
      ],
    },
    {
      type: "SECTION",
      header: "My Third Section".toUpperCase(),
      rows: [
        {
          title: "Different title style",
          showDisclosureIndicator: true,
          titleStyle: {
            color: "red",
          },
        },
      ],
    },
    {
      type: "CUSTOM_VIEW",
      render: () => (
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            color: "#999",
            marginBottom: 40,
            marginTop: -30,
            fontFamily,
          }}
        >
          v1.2.3
        </Text>
      ),
    },
  ];

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#8c231a" />
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>Settings</Text>
        </View>
        <SettingsScreen
          data={this.settingsData}
          globalTextStyle={{ fontFamily }}
          scrollViewProps={{
            refreshControl: (
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({ refreshing: true });
                  setTimeout(() => this.setState({ refreshing: false }), 3000);
                }}
              />
            ),
          }}
        />
      </View>
    );
  }
}

const statusBarHeight = Platform.OS === "ios" ? 35 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    backgroundColor: "#8c231c",
    height: 44 + statusBarHeight,
    alignSelf: "stretch",
    paddingTop: statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  navBarTitle: {
    color: "white",
    fontFamily,
    fontSize: 17,
  },
  heroContainer: {
    marginTop: 40,
    marginBottom: 50,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
    flexDirection: "row",
  },
  heroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "black",
    marginHorizontal: 20,
  },
  heroTitle: {
    fontFamily,
    color: "black",
    fontSize: 24,
  },
  heroSubtitle: {
    fontFamily,
    color: "#999",
    fontSize: 14,
  },
});
