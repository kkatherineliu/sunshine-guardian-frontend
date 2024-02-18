import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SettingsSkinComplexion = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsSkinComplexion, styles.iconLayout]}>
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
      <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      <Text style={[styles.editSkinComplexion, styles.burnsNeverTansTypo]}>
        Edit skin complexion
      </Text>
      <Text style={[styles.type1, styles.doneTypo]}>Type 1</Text>
      <Image
        style={styles.friRectangleIcon}
        contentFit="cover"
        source={require("../assets/fri-rectangle.png")}
      />
      <View style={[styles.friRectangle, styles.friLayout]} />
      <View style={[styles.friRectangle1, styles.friLayout]} />
      <Text style={[styles.burnsNeverTans, styles.burnsNeverTansTypo]}>
        Burns, never tans
      </Text>
      <Image
        style={[styles.settingsSkinComplexionChild, styles.settingsLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.settingsSkinComplexionItem, styles.settingsLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.settingsSkinComplexionInner, styles.settingsLayout]}
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
  searchLayout: {
    height: 70,
    width: 430,
    position: "absolute",
  },
  doneTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  burnsNeverTansTypo: {
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
    bottom: "38.29%",
    top: "42.7%",
    width: "38.17%",
    height: "19.01%",
    position: "absolute",
  },
  settingsLayout: {
    height: 100,
    width: 100,
    top: 530,
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
  done: {
    top: 978,
    left: 224,
    fontSize: FontSize.size_11xl,
    color: Color.colorBeige,
  },
  editSkinComplexion: {
    top: 275,
    left: 58,
    color: Color.colorDimgray,
    width: 409,
    height: 49,
    fontSize: FontSize.size_21xl,
  },
  type1: {
    top: 375,
    left: 199,
    color: Color.colorLightsalmon,
    fontSize: FontSize.size_21xl,
  },
  friRectangleIcon: {
    right: "30.92%",
    left: "30.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "38.29%",
    top: "42.7%",
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
    top: 708,
    left: 162,
    fontSize: FontSize.size_6xl,
    color: Color.colorDarkgray,
  },
  settingsSkinComplexionChild: {
    left: 212,
  },
  settingsSkinComplexionItem: {
    left: -27,
  },
  settingsSkinComplexionInner: {
    left: 451,
  },
  settingsSkinComplexion: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
    overflow: "hidden",
  },
});

export default SettingsSkinComplexion;
