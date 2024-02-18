import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useFitzContext } from './context/LocationContext';
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

/// this one needs working on for the buttons to actually be scrollable
/// OR just change the layout
const GetStartedComplexion = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.getStartedComplexion, styles.iconLayout]}>
      <Pressable
        style={[styles.search, styles.searchLayout1]}
        onPress={() => navigation.navigate("GetStartedSunscreenM")}
      >
        <View style={[styles.searchChild, styles.searchPosition]} />
      </Pressable>
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("GetStartedSunscreenM")}
      >
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </Pressable>
      <View style={[styles.getStartedComplexionChild, styles.getLayout]} />
      <View style={[styles.getStartedComplexionItem, styles.getLayout]} />
      <View style={[styles.getStartedComplexionInner, styles.getLayout]} />
      <View style={[styles.rectangleView, styles.getLayout]} />
      <Text style={[styles.setYourSkin, styles.setYourSkinTypo]}>
        Set your skin complexion
      </Text>
      <Text style={[styles.type1, styles.next1Typo]}>Type 1</Text>
      <Image
        style={styles.friRectangleIcon}
        contentFit="cover"
        source={require("../assets/fri-rectangle.png")}
      />
      <View style={[styles.friRectangle, styles.friLayout]} />
      <View style={[styles.friRectangle1, styles.friLayout]} />
      <Text style={[styles.burnsNeverTans, styles.setYourSkinTypo]}>
        Burns, never tans
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.getChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.getStartedComplexionChild1, styles.getChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.getStartedComplexionChild2, styles.getChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Pressable
        style={[styles.search1, styles.searchLayout]}
        onPress={() => navigation.goBack()}
      >
        <View style={[styles.searchItem, styles.searchLayout]} />
      </Pressable>
      <Pressable
        style={styles.icroundArrowBack}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icroundarrowback6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
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
    top: 67,
    position: "absolute",
  },
  setYourSkinTypo: {
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
    bottom: "33.42%",
    top: "47.57%",
    width: "38.17%",
    height: "19.01%",
    position: "absolute",
  },
  getChildLayout: {
    height: 100,
    width: 100,
    top: 584,
    position: "absolute",
  },
  searchLayout: {
    height: 50,
    width: 50,
    position: "absolute",
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
  getStartedComplexionChild: {
    left: 92,
    backgroundColor: Color.colorLavender,
  },
  getStartedComplexionItem: {
    left: 197,
    backgroundColor: Color.colorLavender,
  },
  getStartedComplexionInner: {
    left: 407,
    backgroundColor: Color.colorLavender,
  },
  rectangleView: {
    left: 302,
    backgroundColor: Color.colorLightslategray,
  },
  setYourSkin: {
    top: 262,
    left: 61,
    color: Color.colorDimgray,
    width: 403,
    height: 110,
    fontSize: FontSize.size_21xl,
  },
  type1: {
    top: 433,
    left: 199,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  friRectangleIcon: {
    right: "30.92%",
    left: "30.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "33.42%",
    top: "47.57%",
    width: "38.17%",
    height: "19.01%",
    position: "absolute",
    overflow: "hidden",
  },
  friRectangle: {
    right: "76.53%",
    left: "-14.69%",
  },
  friRectangle1: {
    right: "-14.69%",
    left: "76.53%",
  },
  burnsNeverTans: {
    top: 764,
    left: 157,
    fontSize: FontSize.size_6xl,
    color: Color.colorDarkgray,
  },
  ellipseIcon: {
    left: 212,
  },
  getStartedComplexionChild1: {
    left: -27,
  },
  getStartedComplexionChild2: {
    left: 451,
  },
  searchItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender,
    left: 0,
    top: 0,
  },
  search1: {
    top: 42,
    left: 27,
  },
  icon: {
    height: "100%",
  },
  icroundArrowBack: {
    left: 32,
    top: 47,
    width: 40,
    height: 40,
    position: "absolute",
  },
  getStartedComplexion: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
  },
});

export default GetStartedComplexion;
