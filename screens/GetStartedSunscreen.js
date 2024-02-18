import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GetStartedSunscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStartedSunscreen}>
      <Image
        style={styles.friRectangleIcon}
        contentFit="cover"
        source={require("../assets/fri-rectangle.png")}
      />
      <View style={[styles.search, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.searchPosition]} />
      </View>
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("Homescreen")}
      >
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </Pressable>
      <View style={[styles.getStartedSunscreenChild, styles.getLayout]} />
      <View style={[styles.getStartedSunscreenItem, styles.getLayout]} />
      <View style={[styles.getStartedSunscreenInner, styles.getLayout]} />
      <View style={[styles.rectangleView, styles.getLayout]} />
      <Text style={[styles.setYourEveryday, styles.setYourEverydayTypo]}>
        Set your everyday sunscreen
      </Text>
      <Text style={[styles.spf15, styles.next1Typo]}>SPF 15</Text>
      <Text style={[styles.mediumProtection, styles.setYourEverydayTypo]}>
        Medium protection
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
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={[styles.search1, styles.searchLayout]}>
        <View style={[styles.searchItem, styles.searchLayout]} />
      </View>
      <Image
        style={styles.icroundArrowBackIcon}
        contentFit="cover"
        source={require("../assets/icroundarrowback1.png")}
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
  next1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  getLayout: {
    height: 6,
    width: 90,
    borderRadius: Border.br_3xs,
    top: 71,
    position: "absolute",
  },
  setYourEverydayTypo: {
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
    bottom: "36.57%",
    top: "51.08%",
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
  getStartedSunscreenChild: {
    left: 92,
    backgroundColor: Color.colorLavender,
  },
  getStartedSunscreenItem: {
    left: 197,
    backgroundColor: Color.colorLavender,
  },
  getStartedSunscreenInner: {
    left: 407,
    backgroundColor: Color.colorLightslategray,
  },
  rectangleView: {
    left: 302,
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
  spf15: {
    top: 430,
    left: 190,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  mediumProtection: {
    top: 763,
    left: 148,
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
    right: "36.26%",
    left: "37.02%",
  },
  vectorIcon1: {
    right: "84.92%",
    left: "-11.64%",
  },
  vectorIcon2: {
    right: "-8.97%",
    left: "82.25%",
  },
  searchItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender,
    left: 0,
    top: 0,
  },
  search1: {
    top: 48,
    left: 26,
  },
  icroundArrowBackIcon: {
    top: 53,
    left: 31,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  getStartedSunscreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 1110,
    overflow: "hidden",
  },
});

export default GetStartedSunscreen;
