import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ReapplyTime from "../components/ReapplyTime";
import Greeting from "../components/Greeting";
import ReapplyEvery from "../components/ReapplyEvery";
import SPFRating from "../components/SPFRating";
import UVIndex from "../components/UVIndex";
import TemperatureToday from "../components/TemperatureToday";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Homescreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homescreen}>
      <View style={[styles.frame, styles.frameLayout]}>
        <Pressable
          style={[styles.icroundMenu, styles.frameLayout]}
          onPress={() => navigation.navigate("SettingsMain")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Text style={[styles.rememberToReapply, styles.reapplyTypo]}>
            Remember to reapply in...
          </Text>
          <Image
            style={styles.type1Icon}
            contentFit="cover"
            source={require("../assets/type-1.png")}
          />
          <ReapplyTime />
          <Text style={styles.minutes}>minutes</Text>
        </View>
      </View>
      <Greeting />
      <Text style={[styles.watchOutFromContainer, styles.todaysOverviewTypo]}>
        <Text style={styles.watchOutFrom}>{`Watch out from `}</Text>
        <Text style={styles.text}>11:00 - 4:00</Text>
        <Text style={styles.watchOutFrom}> PM</Text>
      </Text>
      <View style={[styles.search, styles.searchLayout]}>
        <Text style={[styles.reapplyEvery, styles.reapplyTypo]}>
          Reapply every
        </Text>
        <ReapplyEvery />
      </View>
      <View style={[styles.frame3, styles.searchLayout1]}>
        <Text style={[styles.spf, styles.spfTypo]}>SPF</Text>
        <SPFRating />
      </View>
      <View style={[styles.frame4, styles.framePosition]}>
        <Text style={[styles.uvIndex, styles.spfTypo]}>UV Index</Text>
        <UVIndex />
      </View>
      <View style={[styles.frame5, styles.framePosition]}>
        <View style={styles.frame6}>
          <TemperatureToday />
        </View>
        <Text
          style={[styles.temperatureToday, styles.todaysOverviewTypo]}
        >{`Temperature
today`}</Text>
      </View>
      <View style={[styles.frame7, styles.frame7Layout]}>
        <Text style={[styles.todaysOverview, styles.frame7Layout]}>
          Today’s Overview
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  reapplyTypo: {
    height: 35,
    left: 21,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    top: 25,
    position: "absolute",
  },
  todaysOverviewTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  searchLayout: {
    height: 170,
    backgroundColor: Color.colorPalegoldenrod,
  },
  searchLayout1: {
    width: 202,
    left: 46,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  spfTypo: {
    width: 135,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    left: 21,
    position: "absolute",
  },
  framePosition: {
    left: 277,
    width: 202,
    borderRadius: Border.br_6xl,
    position: "absolute",
    overflow: "hidden",
  },
  frame7Layout: {
    height: 51,
    position: "absolute",
  },
  vectorIcon: {
    width: 45,
    height: 30,
  },
  icroundMenu: {
    left: 420,
    flexDirection: "row",
    justifyContent: "center",
    top: 0,
  },
  frame: {
    top: 38,
    left: 22,
    width: 480,
  },
  rememberToReapply: {
    width: 382,
  },
  type1Icon: {
    top: 121,
    left: 101,
    width: 230,
    height: 234,
    position: "absolute",
  },
  minutes: {
    top: 260,
    left: 167,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  frame2: {
    left: 1,
    width: 433,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_6xl,
    height: 409,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 625,
    left: 45,
    width: 434,
    height: 409,
    position: "absolute",
    overflow: "hidden",
  },
  watchOutFrom: {
    color: Color.colorDarkgray,
  },
  text: {
    color: Color.colorLightsalmon,
  },
  watchOutFromContainer: {
    top: 173,
    width: 453,
    left: 42,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    position: "absolute",
  },
  reapplyEvery: {
    width: 160,
  },
  search: {
    width: 202,
    left: 46,
    borderRadius: Border.br_6xl,
    position: "absolute",
    top: 302,
  },
  spf: {
    top: 33,
  },
  frame3: {
    top: 500,
    height: 96,
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  uvIndex: {
    top: 36,
  },
  frame4: {
    height: 100,
    top: 302,
    backgroundColor: Color.colorAliceblue,
  },
  frame6: {
    top: 95,
    left: 18,
    width: 166,
    height: 53,
    position: "absolute",
    overflow: "hidden",
  },
  temperatureToday: {
    left: 23,
    color: Color.colorDimgray,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    position: "absolute",
    top: 25,
  },
  frame5: {
    top: 426,
    height: 170,
    backgroundColor: Color.colorPalegoldenrod,
  },
  todaysOverview: {
    left: 0,
    fontSize: FontSize.size_16xl,
    width: 422,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorDimgray,
    top: 0,
  },
  frame7: {
    top: 238,
    width: 440,
    left: 42,
    overflow: "hidden",
  },
  homescreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 1110,
    overflow: "hidden",
  },
});

export default Homescreen;
