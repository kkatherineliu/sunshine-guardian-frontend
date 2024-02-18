import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStarted}>
      <Text style={styles.welcomeToSunshineContainer}>
        <Text style={styles.welcomeTo}>{`Welcome to 
`}</Text>
        <Text style={styles.sunshineGuardian}>Sunshine Guardian</Text>
      </Text>
      <Pressable
        style={[styles.search, styles.searchLayout]}
        onPress={() => navigation.navigate("GetStartedName")}
      >
        <View style={[styles.searchChild, styles.searchLayout]} />
      </Pressable>
      <Pressable
        style={styles.getStarted1}
        onPress={() => navigation.navigate("GetStartedName")}
      >
        <Text style={styles.getStarted2}>Get started</Text>
      </Pressable>
      <ImageBackground
        style={styles.untitledArtwork21}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 70,
    width: 430,
    position: "absolute",
  },
  welcomeTo: {
    color: Color.colorDimgray,
  },
  sunshineGuardian: {
    color: Color.colorLightsalmon,
  },
  welcomeToSunshineContainer: {
    top: 307,
    left: 68,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 389,
    height: 119,
    textAlign: "center",
    position: "absolute",
  },
  searchChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDarkseagreen,
  },
  search: {
    top: 955,
    left: 47,
  },
  getStarted2: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBeige,
    textAlign: "center",
  },
  getStarted1: {
    left: 179,
    top: 972,
    position: "absolute",
  },
  untitledArtwork21: {
    top: 416,
    left: 123,
    width: 290,
    height: 348,
    transform: [
      {
        rotate: "1.96deg",
      },
    ],
    position: "absolute",
  },
  getStarted: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 1110,
    overflow: "hidden",
  },
});

export default GetStarted;
