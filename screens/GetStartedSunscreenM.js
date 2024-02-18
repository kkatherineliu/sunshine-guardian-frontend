import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GetStartedSunscreenM = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStartedSunscreenM}>
      <Image
        style={styles.friRectangleIcon}
        contentFit="cover"
        source={require("../assets/fri-rectangle2.png")}
      />
      <TouchableOpacity
        style={[styles.search, styles.searchLayout1]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("GetStartedSkinType")}
      >
        <Pressable style={[styles.searchChild, styles.searchPosition]} />
      </TouchableOpacity>
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("GetStartedSkinType")}
      >
        <Text style={[styles.next1, styles.textTypo]}>Next</Text>
      </Pressable>
      <View style={[styles.getStartedSunscreenMChild, styles.getLayout]} />
      <View style={[styles.getStartedSunscreenMItem, styles.getLayout]} />
      <View style={[styles.getStartedSunscreenMInner, styles.getLayout]} />
      <View style={[styles.rectangleView, styles.getLayout]} />
      <Text style={[styles.setYourEveryday, styles.getMatchedTypo]}>
        Set your everyday sunscreen
      </Text>
      <Text style={[styles.findSunscreenMatch, styles.textTypo]}>
        Find sunscreen match
      </Text>
      <Text style={[styles.text, styles.textTypo]}>?</Text>
      <Text style={[styles.getMatched, styles.getMatchedTypo]}>
        Get matched
      </Text>
      <View style={[styles.friRectangle, styles.friLayout]} />
      <View style={[styles.friRectangle1, styles.friLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable style={[styles.search1, styles.searchLayout]}>
        <Pressable
          style={[styles.searchItem, styles.searchLayout]}
          onPress={() => navigation.goBack()}
        />
      </Pressable>
      <Image
        style={styles.icroundArrowBackIcon}
        contentFit="cover"
        source={require("../assets/icroundarrowback6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout1: {
    height: 70,
    width: 430,
    position: "absolute",
  },
  searchPosition: {
    left: 0,
    top: 0,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  getLayout: {
    height: 6,
    width: 90,
    borderRadius: Border.br_3xs,
    top: 67,
    position: "absolute",
  },
  getMatchedTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  friLayout: {
    borderWidth: 1,
    borderColor: Color.colorLightslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_base,
    bottom: "33.24%",
    top: "47.75%",
    width: "38.17%",
    height: "19.01%",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "36.39%",
    top: "51.26%",
    width: "26.72%",
    height: "12.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  friRectangleIcon: {
    right: "30.73%",
    left: "31.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "33.24%",
    top: "47.75%",
    width: "38.17%",
    height: "19.01%",
    position: "absolute",
    overflow: "hidden",
  },
  searchChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDarkseagreen,
    height: 70,
    width: 430,
    position: "absolute",
  },
  search: {
    top: 955,
    left: 47,
  },
  next1: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBeige,
  },
  next: {
    left: 228,
    top: 972,
    position: "absolute",
  },
  getStartedSunscreenMChild: {
    left: 90,
    backgroundColor: Color.colorLavender,
  },
  getStartedSunscreenMItem: {
    left: 195,
    backgroundColor: Color.colorLavender,
  },
  getStartedSunscreenMInner: {
    left: 405,
    backgroundColor: Color.colorLightslategray,
  },
  rectangleView: {
    left: 300,
    backgroundColor: Color.colorLavender,
  },
  setYourEveryday: {
    top: 261,
    left: 68,
    color: Color.colorDimgray,
    width: 389,
    height: 119,
    fontSize: FontSize.size_21xl,
  },
  findSunscreenMatch: {
    top: 431,
    left: 50,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  text: {
    top: 569,
    left: 229,
    fontSize: 110,
    color: Color.colorDarkseagreen,
    position: "absolute",
  },
  getMatched: {
    top: 763,
    left: 184,
    fontSize: FontSize.size_6xl,
    color: Color.colorDarkgray,
  },
  friRectangle: {
    right: "76.34%",
    left: "-14.5%",
  },
  friRectangle1: {
    right: "-14.69%",
    left: "76.53%",
  },
  vectorIcon: {
    right: "-8.97%",
    left: "82.25%",
  },
  vectorIcon1: {
    right: "82.06%",
    left: "-8.78%",
  },
  searchItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender,
    left: 0,
    top: 0,
  },
  search1: {
    top: 42,
    left: 25,
  },
  icroundArrowBackIcon: {
    top: 47,
    left: 30,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  getStartedSunscreenM: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 1110,
    overflow: "hidden",
  },
});

export default GetStartedSunscreenM;
