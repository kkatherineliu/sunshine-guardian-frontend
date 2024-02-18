import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SettingsSunscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsSunscreen, styles.iconLayout]}>
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
          source={require("../assets/icroundarrowback7.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.search1, styles.searchLayout]}
        onPress={() => navigation.navigate("SettingsMain")}
      >
        <View style={[styles.searchItem, styles.searchLayout]} />
      </Pressable>
      <Pressable style={styles.done} onPress={() => navigation.goBack()}>
        <Text style={[styles.done1, styles.done1Typo]}>Done</Text>
      </Pressable>
      <Text style={[styles.addeditSunscreen, styles.highProtectionTypo]}>
        Add/Edit Sunscreen
      </Text>
      <Image
        style={styles.friRectangleIcon}
        contentFit="cover"
        source={require("../assets/fri-rectangle.png")}
      />
      <Text style={[styles.spf30, styles.done1Typo]}>SPF 30</Text>
      <Text style={[styles.highProtection, styles.highProtectionTypo]}>
        High protection
      </Text>
      <View style={[styles.friRectangle, styles.friLayout]} />
      <View style={[styles.friRectangle1, styles.friLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
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
  searchLayout: {
    height: 70,
    width: 430,
    position: "absolute",
  },
  done1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  highProtectionTypo: {
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
    bottom: "38.38%",
    top: "42.61%",
    width: "38.17%",
    height: "19.01%",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "41.7%",
    top: "45.95%",
    width: "26.72%",
    height: "12.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icroundMenu: {
    top: 38,
    left: 442,
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
    left: 42,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  icroundArrowBack: {
    top: 53,
    width: 40,
    height: 40,
    left: 47,
    position: "absolute",
  },
  searchItem: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDarkseagreen,
    left: 0,
    top: 0,
  },
  search1: {
    top: 961,
    left: 47,
  },
  done1: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBeige,
  },
  done: {
    left: 224,
    top: 978,
    position: "absolute",
  },
  addeditSunscreen: {
    top: 275,
    left: 68,
    color: Color.colorDimgray,
    width: 409,
    height: 49,
    fontSize: FontSize.size_21xl,
  },
  friRectangleIcon: {
    right: "30.73%",
    left: "31.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "38.38%",
    top: "42.61%",
    width: "38.17%",
    height: "19.01%",
    position: "absolute",
    overflow: "hidden",
  },
  spf30: {
    top: 375,
    left: 203,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  highProtection: {
    top: 706,
    left: 168,
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
  settingsSunscreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
    overflow: "hidden",
  },
});

export default SettingsSunscreen;
