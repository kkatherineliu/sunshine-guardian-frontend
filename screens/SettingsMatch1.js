import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SettingsMatch1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsMatch, styles.iconLayout]}>
      <View style={styles.icroundMenu} />
      <View style={[styles.search, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.searchPosition]} />
      </View>
      <Pressable
        style={styles.icroundArrowBack}
        onPress={() => navigation.navigate("SettingsMatch")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icroundarrowback2.png")}
        />
      </Pressable>
      <View style={[styles.settingsMatchChild, styles.settingsLayout]} />
      <View style={[styles.settingsMatchItem, styles.settingsLayout]} />
      <View style={[styles.search1, styles.searchLayout]}>
        <View style={[styles.searchItem, styles.searchLayout]} />
      </View>
      <Pressable
        style={styles.findMySunscreenContainer}
        onPress={() => navigation.navigate("GetStartedMatch")}
      >
        <Text style={styles.findMySunscreen}>Find my sunscreen</Text>
      </Pressable>
      <Text style={styles.setYourSkin}>Set your skin type</Text>
      <Image
        style={[styles.friRectangleIcon, styles.friIconLayout2]}
        contentFit="cover"
        source={require("../assets/fri-rectangle1.png")}
      />
      <Image
        style={[styles.friRectangleIcon1, styles.friIconPosition]}
        contentFit="cover"
        source={require("../assets/fri-rectangle1.png")}
      />
      <Image
        style={[styles.friRectangleIcon2, styles.friIconLayout1]}
        contentFit="cover"
        source={require("../assets/fri-rectangle1.png")}
      />
      <Image
        style={[styles.friRectangleIcon3, styles.friIconLayout1]}
        contentFit="cover"
        source={require("../assets/fri-rectangle1.png")}
      />
      <Image
        style={[styles.friRectangleIcon4, styles.friIconLayout]}
        contentFit="cover"
        source={require("../assets/fri-rectangle1.png")}
      />
      <Text style={[styles.normal, styles.normalTypo]}>Normal</Text>
      <Image
        style={[styles.friRectangleIcon5, styles.friIconLayout]}
        contentFit="cover"
        source={require("../assets/fri-rectangle1.png")}
      />
      <Text style={styles.selectAllThat}>Select all that apply</Text>
      <Text style={[styles.dry, styles.dryTypo]}>Dry</Text>
      <Text style={[styles.acneProne, styles.acneProneTypo]}>Acne Prone</Text>
      <Text style={[styles.sensitive, styles.acneProneTypo]}>Sensitive</Text>
      <Text style={[styles.combination, styles.normalTypo]}>Combination</Text>
      <Text style={[styles.oily, styles.dryTypo]}>Oily</Text>
      <Image
        style={[styles.image2Icon, styles.copy31Layout]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={styles.copy1Icon}
        contentFit="cover"
        source={require("../assets/4926894-copy-1.png")}
      />
      <Image
        style={styles.copy41}
        contentFit="cover"
        source={require("../assets/4926894-copy-4-1.png")}
      />
      <Image
        style={[styles.copy31, styles.copy31Layout]}
        contentFit="cover"
        source={require("../assets/4926894-copy-3-1.png")}
      />
      <Image
        style={[styles.copy53, styles.copyLayout]}
        contentFit="cover"
        source={require("../assets/4926894-copy-5-3.png")}
      />
      <Image
        style={[styles.copy23, styles.copyLayout]}
        contentFit="cover"
        source={require("../assets/4926894-copy-2-3.png")}
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
  settingsLayout: {
    height: 6,
    borderRadius: Border.br_3xs,
    top: 73,
    width: 180,
    position: "absolute",
  },
  searchLayout: {
    height: 70,
    width: 430,
    position: "absolute",
  },
  friIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "60.54%",
    top: "21.44%",
    width: "38.17%",
    height: "18.02%",
    position: "absolute",
    overflow: "hidden",
  },
  friIconPosition: {
    left: "53.24%",
    right: "8.59%",
  },
  friIconLayout1: {
    bottom: "39.73%",
    top: "42.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "38.17%",
    height: "18.02%",
    position: "absolute",
    overflow: "hidden",
  },
  friIconLayout: {
    bottom: "18.92%",
    top: "63.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "38.17%",
    height: "18.02%",
    position: "absolute",
    overflow: "hidden",
  },
  normalTypo: {
    color: Color.colorLightslategray,
    top: 859,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  dryTypo: {
    top: 395,
    color: Color.colorLightslategray,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  acneProneTypo: {
    top: 629,
    color: Color.colorLightslategray,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  copy31Layout: {
    width: 165,
    position: "absolute",
  },
  copyLayout: {
    width: 169,
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
    backgroundColor: Color.colorLavender,
  },
  settingsMatchItem: {
    left: 303,
    backgroundColor: Color.colorSlategray,
  },
  searchItem: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDarkseagreen,
    left: 0,
    top: 0,
  },
  search1: {
    top: 953,
    left: 48,
  },
  findMySunscreen: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBeige,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  findMySunscreenContainer: {
    left: 125,
    top: 970,
    position: "absolute",
  },
  setYourSkin: {
    top: 115,
    fontSize: FontSize.size_21xl,
    color: Color.colorDimgray,
    width: 393,
    height: 48,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 66,
    textAlign: "center",
    position: "absolute",
  },
  friRectangleIcon: {
    left: "8.4%",
    right: "53.44%",
  },
  friRectangleIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "60.54%",
    top: "21.44%",
    width: "38.17%",
    height: "18.02%",
    position: "absolute",
    overflow: "hidden",
  },
  friRectangleIcon2: {
    left: "8.4%",
    right: "53.44%",
  },
  friRectangleIcon3: {
    left: "53.24%",
    right: "8.59%",
  },
  friRectangleIcon4: {
    right: "53.05%",
    left: "8.78%",
  },
  normal: {
    left: 101,
  },
  friRectangleIcon5: {
    right: "8.21%",
    left: "53.63%",
  },
  selectAllThat: {
    top: 178,
    left: 145,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  dry: {
    left: 121,
  },
  acneProne: {
    left: 73,
  },
  sensitive: {
    left: 322,
  },
  combination: {
    left: 302,
  },
  oily: {
    left: 357,
  },
  image2Icon: {
    top: 228,
    left: 295,
    height: 184,
  },
  copy1Icon: {
    top: 244,
    width: 171,
    height: 148,
    left: 66,
    position: "absolute",
  },
  copy41: {
    top: 469,
    left: 287,
    height: 159,
    width: 180,
    position: "absolute",
  },
  copy31: {
    top: 695,
    left: 59,
    height: 175,
  },
  copy53: {
    top: 476,
    left: 60,
    height: 162,
  },
  copy23: {
    top: 701,
    left: 296,
    height: 160,
  },
  settingsMatch: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
    overflow: "hidden",
  },
});

export default SettingsMatch1;
