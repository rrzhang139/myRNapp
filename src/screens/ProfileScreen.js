import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  Platform,
} from "react-native";
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
export default ({ navigation, route }) => {
  const [followers, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [recipeList, setRecipeList] = useState([
    // {
    //   key: "1",
    //   name: "a",
    //   time: 3,
    //   steps: ["hi"],
    //   // image: "",
    // },
  ]);
  const [params, setParams] = useState();
  // console.log(route.params);
  // console.log(navigation.getParam("name"));
  console.log("hi");
  // const _keyExtractor = (datasource, index) => datasource.key;
  useEffect(() => {
    console.log("The item");
    console.log(params);
    console.log("The ROUTE PARAM", route.params);
    if (route.params !== undefined) {
      setRecipeList((prev) => [...prev, route.params]);
    }
    return () => console.log("dasv");
  }, [route.params]);

  //render each MyRecipe
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.recipeContent}>
        <Text style={styles.recipeContentName}>{item.name}</Text>
        <View style={styles.ImageContainer}>
          <Avatar.Image style={styles.recipeImage} size={80}></Avatar.Image>
        </View>
        <Text style={styles.recipeContentTime}>{item.time} mins</Text>
        {(() => {
          let a = item.steps;
          let res = [];
          a.forEach((step) => {
            res.push(<Text style={styles.recipeContentStep}>{step}</Text>);
          });
          return res;
        })()}
      </View>
    );
  };

  return (
    <>
      <ImageBackground
        blurRadius={Platform.OS == "ios" ? 10 : 1}
        source={require("../img/strawberrycup.jpg")}
        style={styles.backgroundimage}
      >
        <View style={styles.box1}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={require("../../src/img/burgerAvatar.jpeg")}
              size={80}
              style={styles.avatar}
            ></Avatar.Image>
            <View>
              <Title style={styles.profName}>Richard Zhang</Title>
              <Caption>@richard-zhang-30</Caption>
            </View>
          </View>
          <View style={styles.followerDisplay}>
            <View style={styles.follower}>
              <Text>Followers</Text>
              <Text style={styles.followerCount}>{followers}</Text>
            </View>

            <View style={styles.line}></View>
            <View style={styles.following}>
              <Text>Following</Text>
              <Text style={styles.followingCount}>{following}</Text>
            </View>
          </View>
        </View>
        <View style={styles.myRecipeContainer}>
          <Text style={styles.myRecipeTitle}>My Recipes</Text>
        </View>
        <View style={styles.myRecipesBody}>
          <FlatList
            keyExtractor={(item) => item.key}
            data={recipeList}
            renderItem={_renderItem}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    right: 20,
    bottom: 10,
  },
  box1: {
    alignItems: "center",
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 20,
    marginBottom: 30,
  },

  backgroundimage: {
    flex: 1,
  },
  follower: {
    alignItems: "center",
  },
  followerDisplay: {
    left: 40,
    bottom: 10,
    width: 300,
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  followerCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  following: {
    alignItems: "center",
  },
  followingCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  myRecipesBody: {
    height: "100%",
    width: "90%",
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 3,
    borderColor: "#21a5e3",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
  myRecipeContainer: {
    height: 50,
    width: "50%",
    backgroundColor: "#21a5e3",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    left: 20,
    alignItems: "center",
  },
  myRecipeTitle: {
    fontSize: 30,
    fontFamily: "Quicksand_600SemiBold",
    color: "white",
  },
  line: {
    height: "100%",
    width: 1,
    backgroundColor: "gray",
  },
  profName: {
    fontSize: 30,
    fontFamily: "Quicksand_700Bold",
  },
  recipeContent: {
    flex: 1,
    // alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    // justifyContent: "space-around",
    paddingBottom: 10,
  },
  recipeContentName: {
    fontSize: 30,
  },
  recipeContentTime: {
    fontSize: 15,
  },
  recipeContentStep: {
    left: 20,
  },
  //   recipeImage: {
  //     position: "absolute",
  //     left: 50,
  //   },
  ImageContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    left: 250,
  },
  userInfoSection: {
    flexDirection: "row",
  },
});
