import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const SettingsMatch = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsMatch, styles.iconLayout]}>
      <View style={styles.icroundMenu} />
      <View style={[styles.search, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.searchPosition]} />
      </View>
      <Pressable
        style={styles.icroundArrowBack}
        onPress={() => navigation.navigate("SettingsMain")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icroundarrowback.png")}
        />
      </Pressable>
      <View style={[styles.settingsMatchChild, styles.settingsLayout1]} />
      <View style={[styles.settingsMatchItem, styles.settingsLayout1]} />
      <Pressable
        style={[styles.search1, styles.searchLayout]}
        onPress={() => navigation.navigate("SettingsMatch1")}
      >
        <View style={[styles.searchItem, styles.searchLayout]} />
      </Pressable>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <Text style={[styles.setYourSkin, styles.setYourSkinTypo]}>
        Set your skin complexion
      </Text>
      <Text style={[styles.type1, styles.nextTypo]}>Type 1</Text>
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
        style={[styles.settingsMatchInner, styles.settingsLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.settingsLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.settingsMatchChild1, styles.settingsLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  searchLayout1: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  searchPosition: {
    left: 0,
    top: 0,
  },
  settingsLayout1: {
    height: 6,
    width: 180,
    borderRadius: Border.br_3xs,
    top: 73,
    position: "absolute",
  },
  searchLayout: {
    height: 70,
    width: 430,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    bottom: "33.33%",
    top: "47.66%",
    width: "38.17%",
    height: "19.01%",
    position: "absolute",
  },
  settingsLayout: {
    height: 100,
    width: 100,
    top: 585,
    position: "absolute",
  },
  icroundMenu: {
    top: 38,
    left: 432,
    width: 60,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  searchChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender,
    height: 50,
    width: 50,
    position: "absolute",
  },
  search: {
    top: 48,
    left: 32,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  icroundArrowBack: {
    left: 37,
    top: 53,
    width: 40,
    height: 40,
    position: "absolute",
  },
  settingsMatchChild: {
    left: 100,
    backgroundColor: Color.colorSlategray,
  },
  settingsMatchItem: {
    left: 303,
    backgroundColor: Color.colorLavender,
  },
  searchItem: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDarkseagreen,
    left: 0,
    top: 0,
  },
  search1: {
    top: 956,
    left: 47,
  },
  next: {
    top: 973,
    left: 228,
    fontSize: FontSize.size_11xl,
    color: Color.colorBeige,
  },
  setYourSkin: {
    top: 263,
    left: 61,
    color: Color.colorDimgray,
    width: 403,
    height: 110,
    fontSize: FontSize.size_21xl,
  },
  type1: {
    top: 434,
    left: 199,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_21xl,
  },
  friRectangleIcon: {
    right: "30.92%",
    left: "30.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "33.33%",
    top: "47.66%",
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
    top: 765,
    left: 178,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkgray,
  },
  settingsMatchInner: {
    left: 212,
  },
  ellipseIcon: {
    left: -27,
  },
  settingsMatchChild1: {
    left: 451,
  },
  settingsMatch: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
    overflow: "hidden",
  },
});

export default SettingsMatch;
