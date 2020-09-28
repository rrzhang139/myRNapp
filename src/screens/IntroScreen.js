import React from "react";
import { Dimensions } from "react-native";

export default IntroScreen = () => {
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
