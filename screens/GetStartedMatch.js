import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GetStartedMatch = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.getStartedMatch}>
      <Pressable
        style={[styles.search, styles.searchLayout]}
        onPress={() => navigation.navigate("Homescreen")}
      >
        <View style={[styles.searchChild, styles.searchLayout]} />
      </Pressable>
      <Pressable
        style={styles.setAsMyContainer}
        onPress={() => navigation.navigate("Homescreen")}
      >
        <Text style={[styles.setAsMySunscreen, styles.normalSkinTypo]}>
          Set as my sunscreen
        </Text>
      </Pressable>
      <Text style={styles.weFoundA}>We found a match</Text>
      <Text style={[styles.spf50, styles.spf50Typo]}>{data.spf}</Text>
      <Text style={[styles.beautyOfJoseon, styles.spf50Typo]}>
        {data.name}
      </Text>
      <Text style={styles.loremIpsumDolor}>
        {data.explanation}
      </Text>
      <Text style={[styles.normalSkin, styles.normalSkinTypo]}> SPF
      </Text>
      <Image
        style={styles.type2Icon}
        contentFit="cover"
        source={require("../assets/type-2.png")}
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
  normalSkinTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "1000",
    textAlign: "center",
  },
  spf50Typo: {
    height: 51,
    width: 422,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  setAsMySunscreen: {
    color: Color.colorBeige,
    textAlign: "center",
    fontSize: FontSize.size_11xl,
  },
  setAsMyContainer: {
    left: 110,
    top: 972,
    position: "absolute",
  },
  weFoundA: {
    top: 100,
    left: 63,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 393,
    height: 48,
    color: Color.colorDimgray,
    textAlign: "center",
    position: "absolute",
  },
  spf50: {
    top: 451,
    left: 50,
    fontSize: 55,
    color: Color.colorDimgray,
  },
  beautyOfJoseon: {
    top: 186,
    left: 51,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_11xl,
  },
  loremIpsumDolor: {
    top: 744,
    left: 56,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    width: 421,
    height: 116,
    color: Color.colorDimgray,
    textAlign: "center",
    position: "absolute",
  },
  normalSkin: {
    top: 527,
    left: 225,
    fontSize: FontSize.size_6xl,
    color: Color.colorDimgray,
    textAlign: "center",
    position: "absolute",
  },
  type2Icon: {
    top: 336,
    left: 93,
    width: 336,
    height: 336,
    position: "absolute",
  },
  getStartedMatch: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 1110,
    overflow: "hidden",
  },
});

export default GetStartedMatch;
