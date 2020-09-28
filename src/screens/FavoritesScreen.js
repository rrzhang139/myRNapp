import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Icon,
  ListItem,
  Thumbnail,
  Item,
  Input,
  StyleProvider,
} from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import commonColor from "../../native-base-theme/variables/commonColor";

let helperArray = require("./favList.json");

export default ({ navigation }) => {
  const [allFavs, setallFavs] = useState(helperArray);
  const [FavsFiltered, setFavsFiltered] = useState(helperArray);

  const searchFavs = (text) => {
    setFavsFiltered(
      allFavs.filter((favorite) =>
        favorite.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <StyleProvider style={getTheme(commonColor)}>
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={(text) => searchFavs(text)}
            />
          </Item>
        </Header>
        <Content>
          {FavsFiltered.map((item) => (
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: item.image }} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.time} Mins</Text>
              </Body>
            </ListItem>
          ))}
        </Content>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  box1: {
    alignContent: "center",
    width: "50%",
  },
  image: {
    flex: 1,
  },
});
