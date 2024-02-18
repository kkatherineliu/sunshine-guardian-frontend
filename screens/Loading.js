import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <Text style={styles.findingYourMatch}>Finding your match...</Text>
      <Image
        style={styles.untitledArtwork21}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Text style={styles.findingYourMatch}>Finding your match...</Text>
      <Image
        style={styles.untitledArtwork21}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  findingYourMatch: {
    top: 347,
    left: 65,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorLightsalmon,
    textAlign: "center",
    width: 393,
    height: 48,
    position: "absolute",
  },
  untitledArtwork21: {
    top: 406,
    left: 111,
    width: 302,
    height: 358,
    position: "absolute",
  },
  loading: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 1110,
    overflow: "hidden",
  },
});

export default Loading;
