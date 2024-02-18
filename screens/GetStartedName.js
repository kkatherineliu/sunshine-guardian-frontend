import * as React from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GetStartedName = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.getStartedName, styles.iconLayout]}>
      <Pressable
        style={[styles.search, styles.searchLayout1]}
        onPress={() => navigation.navigate("GetStartedLocation")}
      >
        <Pressable style={styles.searchChild} />
      </Pressable>
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("GetStartedLocation")}
      >
        <Text style={styles.next1}>Next</Text>
      </Pressable>
      <Text style={[styles.yourName, styles.search2Position]}>Your name</Text>
      <View style={[styles.search1, styles.searchLayout1]}>
        <View style={[styles.searchItem, styles.searchPosition]} />
      </View>
      <TextInput
        style={[styles.search2, styles.search2Position]}
        textAlign="center"
      />
      <View style={[styles.getStartedNameChild, styles.getLayout]} />
      <View style={[styles.getStartedNameItem, styles.getLayout]} />
      <View style={[styles.getStartedNameInner, styles.getLayout]} />
      <View style={[styles.rectangleView, styles.getLayout]} />
      <Pressable style={[styles.search3, styles.searchLayout]}>
        <Pressable style={[styles.searchInner, styles.searchLayout]} />
      </Pressable>
      <Pressable
        style={styles.icroundArrowBack}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icroundarrowback4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  searchLayout1: {
    height: 70,
    width: 430,
  },
  search2Position: {
    left: 45,
    position: "absolute",
  },
  searchPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  getLayout: {
    height: 6,
    width: 90,
    borderRadius: Border.br_3xs,
    top: 67,
    position: "absolute",
  },
  searchLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  searchChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDarkseagreen,
    left: 0,
    top: 0,
    height: 70,
    width: 430,
    position: "absolute",
  },
  search: {
    top: 955,
    left: 47,
    position: "absolute",
  },
  next1: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBeige,
    textAlign: "center",
  },
  next: {
    left: 228,
    top: 972,
    position: "absolute",
  },
  yourName: {
    top: 485,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray,
    width: 422,
    height: 51,
    textAlign: "center",
  },
  searchItem: {
    backgroundColor: Color.colorAliceblue,
    height: 70,
    width: 430,
    position: "absolute",
  },
  search1: {
    top: 554,
    left: 41,
    position: "absolute",
  },
  search2: {
    top: 555,
    fontSize: 30,
    fontFamily: "Inter",
    fontWeight: "bold",
    textAlign: "center",
    height: 70,
    width: 430,
  },
  getStartedNameChild: {
    left: 92,
    backgroundColor: Color.colorLightslategray,
  },
  getStartedNameItem: {
    left: 197,
    backgroundColor: Color.colorAliceblue,
  },
  getStartedNameInner: {
    left: 407,
    backgroundColor: Color.colorAliceblue,
  },
  rectangleView: {
    left: 302,
    backgroundColor: Color.colorAliceblue,
  },
  searchInner: {
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  search3: {
    top: 42,
    left: 27,
  },
  icon: {
    height: "100%",
  },
  icroundArrowBack: {
    left: 32,
    top: 47,
    width: 40,
    height: 40,
    position: "absolute",
  },
  getStartedName: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
  },
});

export default GetStartedName;
