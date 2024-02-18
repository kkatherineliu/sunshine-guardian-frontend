import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const ReminderScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.reminderScreen, styles.iconLayout]}>
      <View style={[styles.search, styles.searchLayout1]}>
        <View style={[styles.searchChild, styles.searchPosition]} />
      </View>
      <Image
        style={styles.untitledArtwork21}
        contentFit="cover"
        source={require("../assets/untitled-artwork-2-1.png")}
      />
      <Text style={styles.timeToReapply}>time to reapply your sunscreen</Text>
      <Pressable
        style={styles.icroundArrowBack}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icroundarrowback.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.search1, styles.searchLayout]}
        onPress={() => navigation.navigate("Homescreen")}
      >
        <View style={[styles.searchItem, styles.searchLayout]} />
      </Pressable>
      <Pressable
        style={styles.sunscreenApplied}
        onPress={() => navigation.navigate("Homescreen")}
      >
        <Text style={[styles.sunscreenApplied1, styles.protectFromTheTypo]}>
          Sunscreen Applied!
        </Text>
      </Pressable>
      <Pressable
        style={styles.remindMeInContainer}
        onPress={() => navigation.navigate("Homescreen")}
      >
        <Text style={[styles.remindMeIn5Minutes, styles.protectFromTheTypo]}>
          Remind me in 5 minutes
        </Text>
      </Pressable>
      <Text style={[styles.protectFromThe, styles.protectFromTheTypo]}>
        Protect from the burn
      </Text>
      <View style={styles.rectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
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
  protectFromTheTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  searchChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLavender,
    height: 50,
    width: 50,
    position: "absolute",
  },
  search: {
    top: 43,
    left: 38,
  },
  untitledArtwork21: {
    top: 383,
    left: 88,
    width: 348,
    height: 413,
    position: "absolute",
  },
  timeToReapply: {
    top: 232,
    left: 75,
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorDarkgray,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  icroundArrowBack: {
    left: 43,
    top: 48,
    width: 40,
    height: 40,
    position: "absolute",
  },
  searchItem: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDarkseagreen,
    left: 0,
    top: 0,
  },
  search1: {
    top: 946,
    left: 47,
  },
  sunscreenApplied1: {
    fontSize: FontSize.size_11xl,
    color: Color.colorBeige,
  },
  sunscreenApplied: {
    left: 118,
    top: 963,
    position: "absolute",
  },
  remindMeIn5Minutes: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkgray,
    fontWeight: "700",
  },
  remindMeInContainer: {
    left: 146,
    top: 1034,
    position: "absolute",
  },
  protectFromThe: {
    top: 180,
    left: 51,
    fontSize: FontSize.size_16xl,
    color: Color.colorLightsalmon,
    width: 422,
    height: 51,
    position: "absolute",
  },
  rectangle: {
    top: 461,
    left: 12,
    width: 500,
    height: 300,
    position: "absolute",
  },
  reminderScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
  },
});

export default ReminderScreen;
