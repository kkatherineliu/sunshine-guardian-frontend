import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Switch } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SettingsMain = () => {
  const [vectorSwitchValueState, setVectorSwitchValueState] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsMain, styles.iconLayout]}>
      <View style={[styles.search, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.searchPosition]} />
        <Text style={[styles.findASunscreen, styles.findASunscreenLayout]}>
          Find a sunscreen match
        </Text>
      </View>
      <Text style={styles.reminders}>Reminders</Text>
      <Text style={[styles.getNotificationsTo, styles.sunshineGuardianTypo]}>
        Get notifications to stay protected
      </Text>
      <View style={styles.icroundMenu} />
      <View style={[styles.search1, styles.searchLayout]}>
        <View style={[styles.searchItem, styles.searchLayout]} />
      </View>
      <Pressable
        style={styles.icroundArrowBack}
        onPress={() => navigation.navigate("Homescreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icroundarrowback.png")}
        />
      </Pressable>
      <Switch
        style={styles.vector}
        value={vectorSwitchValueState}
        onValueChange={setVectorSwitchValueState}
        trackColor={{ false: "#939393", true: "#f69979" }}
      />
      <Image
        style={[styles.majesticonsarrowRight, styles.majesticonsarrowLayout]}
        contentFit="cover"
        source={require("../assets/majesticonsarrowright.png")}
      />
      <View style={[styles.search2, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.searchPosition]} />
        <Text style={[styles.findASunscreen, styles.findASunscreenLayout]}>
          Edit skin type
        </Text>
      </View>
      <Image
        style={[styles.majesticonsarrowRight1, styles.majesticonsarrowLayout]}
        contentFit="cover"
        source={require("../assets/majesticonsarrowright.png")}
      />
      <View style={[styles.search3, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.searchPosition]} />
        <Text style={[styles.findASunscreen, styles.findASunscreenLayout]}>
          Edit location
        </Text>
      </View>
      <Image
        style={[styles.majesticonsarrowRight2, styles.majesticonsarrowLayout]}
        contentFit="cover"
        source={require("../assets/majesticonsarrowright.png")}
      />
      <Pressable
        style={[styles.search4, styles.searchLayout1]}
        onPress={() => navigation.navigate("SettingsSunscreen")}
      >
        <View style={[styles.searchChild, styles.searchPosition]} />
        <Text style={[styles.findASunscreen, styles.findASunscreenLayout]}>
          Add/Edit sunscreen
        </Text>
      </Pressable>
      <Image
        style={[styles.majesticonsarrowRight3, styles.majesticonsarrowLayout]}
        contentFit="cover"
        source={require("../assets/majesticonsarrowright.png")}
      />
      <Text style={[styles.sunshineGuardian, styles.sunshineGuardianTypo]}>
        Sunshine Guardian
      </Text>
      <Image
        style={styles.untitledArtwork21}
        contentFit="cover"
        source={require("../assets/untitled-artwork-2-11.png")}
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
    height: 89,
    position: "absolute",
  },
  searchPosition: {
    backgroundColor: Color.colorLavender,
    left: 0,
    top: 0,
  },
  findASunscreenLayout: {
    width: 453,
    textAlign: "left",
  },
  sunshineGuardianTypo: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  searchLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  majesticonsarrowLayout: {
    height: 43,
    width: 43,
    left: 421,
    position: "absolute",
    overflow: "hidden",
  },
  searchChild: {
    borderRadius: Border.br_6xl,
    width: 433,
    height: 89,
    position: "absolute",
  },
  findASunscreen: {
    top: 30,
    left: 25,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    width: 453,
    position: "absolute",
  },
  search: {
    top: 232,
    width: 478,
    height: 89,
    left: 42,
  },
  reminders: {
    top: 127,
    fontSize: FontSize.size_16xl,
    width: 422,
    height: 51,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 42,
    position: "absolute",
  },
  getNotificationsTo: {
    top: 178,
    width: 453,
    textAlign: "left",
    left: 42,
  },
  icroundMenu: {
    top: 38,
    left: 442,
    width: 60,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  searchItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender,
    left: 0,
    top: 0,
  },
  search1: {
    top: 48,
    left: 42,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  icroundArrowBack: {
    left: 47,
    top: 53,
    width: 40,
    height: 40,
    position: "absolute",
  },
  vector: {
    height: "3.51%",
    width: "13.36%",
    top: "11.47%",
    right: "9.92%",
    bottom: "85.02%",
    left: "76.72%",
    undefined: "",
    position: "absolute",
  },
  majesticonsarrowRight: {
    top: 255,
  },
  search2: {
    top: 440,
    width: 478,
    height: 89,
    left: 42,
  },
  majesticonsarrowRight1: {
    top: 463,
  },
  search3: {
    top: 544,
    width: 478,
    height: 89,
    left: 42,
  },
  majesticonsarrowRight2: {
    top: 567,
  },
  search4: {
    top: 336,
    width: 478,
    height: 89,
    left: 42,
  },
  majesticonsarrowRight3: {
    top: 362,
  },
  sunshineGuardian: {
    top: 1021,
    left: 63,
    textAlign: "center",
    width: 399,
    height: 49,
  },
  untitledArtwork21: {
    top: 687,
    left: 132,
    width: 260,
    height: 308,
    position: "absolute",
  },
  settingsMain: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
    overflow: "hidden",
  },
});

export default SettingsMain;
