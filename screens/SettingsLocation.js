import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const SettingsLocation = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsLocation, styles.iconLayout]}>
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
          source={require("../assets/icroundarrowback3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.search1, styles.searchLayout]}
        onPress={() => navigation.navigate("SettingsMain")}
      >
        <View style={[styles.searchItem, styles.searchLayout]} />
      </Pressable>
      <Text style={styles.done}>Done</Text>
      <Text style={[styles.editLocation, styles.editLocationTypo]}>
        Edit location
      </Text>
      <View style={[styles.search2, styles.search2Position]}>
        <View style={[styles.searchInner, styles.searchLayout]} />
      </View>
      <Image
        style={[styles.letsIconsarrowDropDown, styles.search2Position]}
        contentFit="cover"
        source={require("../assets/letsiconsarrowdropdown.png")}
      />
      <Text style={[styles.helpUsIdentify, styles.editLocationTypo]}>
        Help us identify the UV index
      </Text>
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
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  searchLayout: {
    height: 70,
    width: 430,
    position: "absolute",
  },
  editLocationTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  search2Position: {
    top: 582,
    height: 70,
    position: "absolute",
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
    height: 70,
  },
  search1: {
    top: 961,
    left: 47,
  },
  done: {
    top: 978,
    left: 224,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBeige,
    textAlign: "center",
    position: "absolute",
  },
  editLocation: {
    top: 458,
    left: 51,
    fontSize: FontSize.size_21xl,
    color: Color.colorDimgray,
    width: 422,
    height: 51,
  },
  searchInner: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  search2: {
    width: 430,
    top: 582,
    left: 47,
  },
  letsIconsarrowDropDown: {
    left: 60,
    width: 70,
    opacity: 0.45,
    overflow: "hidden",
  },
  helpUsIdentify: {
    top: 519,
    left: 95,
    fontSize: FontSize.size_6xl,
    color: Color.colorLightsalmon,
  },
  settingsLocation: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
    overflow: "hidden",
  },
});

export default SettingsLocation;
