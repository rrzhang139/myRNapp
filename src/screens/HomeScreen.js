import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import Card from "../../shared/Card";
import { SliderBox } from "react-native-image-slider-box";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = ({ navigation }) => {
  const [modalOpen, setModal] = useState(false);
  //Shows # of steps in a recipe
  const [stepsIndex, setIndex] = useState(0);
  const [i, setI] = useState(0);
  const [recipe, setRecipe] = useState({
    key: i,
    name: "",
    time: null,
    steps: [],
    image: null,
  });
  const handlePressImage = (index) => {
    if (index == 0) {
      navigation.navigate("Favorites");
    }
  };
  const navtoFavorites = () => navigation.navigate("Favorites");
  const navtoExplore = () => navigation.navigate("Explore");
  //This changes text of the 'recipe' item each time
  const handleChange = (value, name) => {
    if (name == "steps") {
      //We must update the array within the object
    } else {
      setRecipe((prevState) => ({ ...prevState, [name]: value }));
      console.log(recipe);
    }
  };
  //Custom component for Text Input
  //   const TextInputComponent = ({
  //     value,
  //     onChangeText,
  //     name,
  //     placeholder,
  //     ...props
  //   }) => (
  //     <TextInput
  //       value={value}
  //       placeholder={placeholder}
  //       onChangeText={onChangeText(name, value)} //... Bind the name here
  //       {...props}
  //     />
  //   );

  const openModal = () => setModal(true);

  //onPress submit button will create a nvigation to profile tab, where data is transferred there to add to list
  const addRecipe = () => {};

  return (
    <>
      {/*Our "make a recipe modal" */}
      <Modal visible={modalOpen} animationType="slide">
        <View style={StyleSheet.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModal(false)}
          />
          <ImageBackground
            style={styles.modalTop}
            source={require("../img/modalTop.jpg")}
          >
            <Text style={styles.modalTopText}>Create.</Text>
            <Text style={styles.modalTopText}>Share.</Text>
          </ImageBackground>

          <MaterialIcons
            name="add"
            size={24}
            onPress={() => {
              setI((prev) => prev + 1);
              navigation.navigate("Profile", recipe);
            }}
          />
          {/*Name of recipe input */}

          <TextInput
            value={recipe.name}
            onChangeText={(e) => handleChange(e, "name")}
            placeholder="Put name of Meal"
          />

          {/*Time of recipe input */}
          <TextInput
            onChangeText={(e) => handleChange(e, "time")}
            placeholder="Give estimate how long"
          />

          {/*Steps of recipe input */}
          <TextInput
            value={recipe.steps}
            onChangeText={(e) => handleChange(e, "steps")}
            placeholder="The steps"
          />

          {/*Image of recipe input */}
          <TextInput
            value={recipe.image}
            onChangeText={(e) => handleChange(e, "steps")}
            placeholder="url of image"
          />
        </View>
      </Modal>

      <ImageBackground
        blurRadius={Platform.OS == "ios" ? 10 : 1}
        source={require("../img/fruitbowl.jpeg")}
        style={styles.image}
      >
        <ScrollView>
          <View style={styles.screen}>
            <View style={styles.sliderbox}>
              <SliderBox
                images={[
                  require("../img/mainSlide3.jpg"),
                  require("../img/mainSlide2.jpg"),
                  require("../img/mainSlide1.jpg"),
                ]}
                dotStyle={styles.dot}
                ImageComponentStyle={styles.imageslide}
                paginationBoxVerticalPadding={20}
                autoplay={true}
                circleLoop
                sliderBoxHeight={300}
                parentWidth={300}
                dotColor="#FFEE58"
                resizeMethod={"resize"}
                resizeMode={"cover"}
                onCurrentImagePressed={(index) => handlePressImage(index)}
              />
            </View>
            <Text style={styles.welcometext}>Welcome to Recipes4U</Text>
            <Text style={styles.welcomeSubtext}>For all the foodies.</Text>
            <View style={styles.homeContent}>
              <TouchableOpacity
                onPress={navtoExplore}
                style={{ width: 400, height: 150, marginTop: 40 }}
              >
                <ImageBackground
                  source={require("../img/burgerartsy.jpg")}
                  style={styles.card}
                  imageStyle={styles.imageBox}
                >
                  <Text style={styles.text1}>Explore</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={navtoFavorites}
                style={{ width: 400, height: 150, marginTop: 40 }}
              >
                <ImageBackground
                  source={require("../img/pancake.jpg")}
                  style={styles.card}
                  imageStyle={styles.imageBox}
                >
                  <Text style={styles.text1}>Favorites</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={openModal}
                style={{ width: 400, height: 150, marginTop: 40 }}
              >
                <ImageBackground
                  source={require("../img/recipe.jpg")}
                  style={styles.card}
                  imageStyle={styles.imageBox}
                >
                  <Text style={styles.text1}>Post a Recipe</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default withNavigation(HomeScreen);

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "90%",
  },
  imageBox: {
    borderRadius: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)",
  },
  homeContent: {
    // flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    color: "black",
    fontFamily: "BalsamiqSans_700Bold_Italic",
    left: 40,
    // top: 30,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageslide: {
    borderRadius: 15,
    // width: "97%",
    marginTop: 5,
    height: 200,
  },
  modalTop: {
    height: "50%",
    width: "100%",
    alignItems: "flex-end",
  },
  modalTopText: {
    fontFamily: "Quicksand_500Medium",
    right: 60,
    top: 10,
    fontSize: 30,
  },
  screen: {
    alignItems: "center",
  },
  sliderbox: {
    height: 200,
    alignItems: "center",
    width: "90%",
    // borderWidth: 5,
  },
  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Quicksand_500Medium",
    left: 20,
    top: 10,
  },
  welcometext: {
    fontWeight: "bold",
    color: "black",
    position: "absolute", // child
    top: 10,
    left: 65,
    fontFamily: "Quicksand_500Medium",
    fontSize: 25,
  },
  welcomeSubtext: {
    fontWeight: "bold",
    color: "black",
    position: "absolute", // child
    top: 45,
    left: 70,
    fontFamily: "Quicksand_500Medium",
    fontSize: 12,
  },
});
