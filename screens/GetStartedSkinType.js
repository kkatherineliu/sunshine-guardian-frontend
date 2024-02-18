import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useSkinTypeContext } from '../context/SkinTypeContext';
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const GetStartedSkinType = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStartedSkinType}>
      <Pressable
        style={[styles.search, styles.searchLayout]}
        onPress={navigation.navigate("Loading")}
      >
        <View style={[styles.searchChild, styles.searchLayout]} />
      </Pressable>
      <Pressable
        style={styles.findMySunscreenContainer}
        onPress={navigation.navigate("Loading")}
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
      <Text style={styles.selectAllThat}>Select the one that applies</Text>
      <Text style={[styles.dry, styles.dryTypo]}>Dry</Text>
      <Text style={[styles.acneProne, styles.acneProneTypo]}>Acne Prone</Text>
      <Text style={[styles.sensitive, styles.acneProneTypo]}>Sensitive</Text>
      <Text style={[styles.combination, styles.normalTypo]}>Combination</Text>
      <Text style={[styles.oily, styles.dryTypo]}>Oily</Text>
      
      <Pressable onPress={setSharedSkinType("oily skin")}>
        <Image
          style={[styles.image2Icon, styles.copy31Layout]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>

      <Pressable onPress={setSharedSkinType("dry skin")}>
        <Image
          style={styles.copy1Icon}
          contentFit="cover"
          source={require("../assets/4926894-copy-1.png")}
        />
      </Pressable>

      <Pressable onPress={setSharedSkinType("sensitive skin")}>
        <Image
          style={styles.copy41}
          contentFit="cover"
          source={require("../assets/4926894-copy-4-1.png")}
        />
      </Pressable>
      
      <Pressable onPress={setSharedSkinType("normal skin")}>
        <Image
          style={[styles.copy31, styles.copy31Layout]}
          contentFit="cover"
          source={require("../assets/4926894-copy-3-1.png")}
        />
      </Pressable>

      <Pressable onPress={setSharedSkinType("acne-prone skin")}>
        <Image
          style={styles.copy54}
          contentFit="cover"
          source={require("../assets/4926894-copy-5-4.png")}
        />
      </Pressable>
      
      <Pressable onPress={setSharedSkinType("combination skin")}>
        <Image
          style={styles.copy24}
          contentFit="cover"
          source={require("../assets/4926894-copy-2-4.png")}
        />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 70,
    width: 430,
    position: "absolute",
  },
  friIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "60.36%",
    top: "21.62%",
    width: "38.17%",
    height: "18.02%",
    position: "absolute",
    overflow: "hidden",
  },
  friIconPosition: {
    left: "53.05%",
    right: "8.78%",
  },
  friIconLayout1: {
    bottom: "39.55%",
    top: "42.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "38.17%",
    height: "18.02%",
    position: "absolute",
    overflow: "hidden",
  },
  friIconLayout: {
    bottom: "18.74%",
    top: "63.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "38.17%",
    height: "18.02%",
    position: "absolute",
    overflow: "hidden",
  },
  normalTypo: {
    color: Color.colorLightslategray,
    top: 861,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  dryTypo: {
    top: 397,
    color: Color.colorLightslategray,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  acneProneTypo: {
    top: 631,
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
  findMySunscreen: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBeige,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  findMySunscreenContainer: {
    left: 124,
    top: 972,
    position: "absolute",
  },
  setYourSkin: {
    top: 100,
    left: 63,
    fontSize: FontSize.size_21xl,
    color: Color.colorDimgray,
    width: 393,
    height: 48,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  friRectangleIcon: {
    left: "8.21%",
    right: "53.63%",
  },
  friRectangleIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "60.36%",
    top: "21.62%",
    width: "38.17%",
    height: "18.02%",
    position: "absolute",
    overflow: "hidden",
  },
  friRectangleIcon2: {
    left: "8.21%",
    right: "53.63%",
  },
  friRectangleIcon3: {
    left: "53.05%",
    right: "8.78%",
  },
  friRectangleIcon4: {
    right: "53.24%",
    left: "8.59%",
  },
  normal: {
    left: 100,
  },
  friRectangleIcon5: {
    right: "8.4%",
    left: "53.44%",
  },
  selectAllThat: {
    top: 163,
    left: 142,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  dry: {
    left: 120,
  },
  acneProne: {
    left: 72,
  },
  sensitive: {
    left: 321,
  },
  combination: {
    left: 301,
  },
  oily: {
    left: 356,
  },
  image2Icon: {
    top: 230,
    height: 184,
    left: 294,
  },
  copy1Icon: {
    top: 246,
    left: 65,
    width: 171,
    height: 148,
    position: "absolute",
  },
  copy41: {
    top: 471,
    width: 180,
    height: 159,
    left: 294,
    position: "absolute",
  },
  copy31: {
    top: 697,
    left: 58,
    height: 175,
  },
  copy54: {
    top: 468,
    left: 69,
    width: 149,
    height: 163,
    position: "absolute",
  },
  copy24: {
    top: 706,
    left: 303,
    width: 151,
    height: 154,
    position: "absolute",
  },
  getStartedSkinType: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 1110,
    overflow: "hidden",
  },
});

export default GetStartedSkinType;
