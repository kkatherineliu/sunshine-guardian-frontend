import * as React from "react";
import { useState } from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { useLocationContext } from '../context/LocationContext';
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const GetStartedLocation = () => {
  const { setLocation } = useLocationContext();
  const [inputText, setInputText] = useState(''); 
  const navigation = useNavigation();

  const handleNextPress = () => {
    setLocation(inputText); // Update the global location context
    navigation.navigate('GetStartedComplexion'); // Navigate to the next screen
  };

  return (
    <View style={[styles.getStartedLocation, styles.iconLayout]}>
      <Pressable
        style={[styles.search, styles.searchLayout1]}
        onPress={{handleNextPress}}
      >
        <View style={styles.searchChild} />
      </Pressable>
      <Pressable
        style={styles.next}
        onPress={{handleNextPress}}
      >
        <Text style={styles.next1}>Next</Text>
      </Pressable>
      <View style={[styles.getStartedLocationChild, styles.getLayout]} />
      <View style={[styles.getStartedLocationItem, styles.getLayout]} />
      <View style={[styles.getStartedLocationInner, styles.getLayout]} />
      <View style={[styles.rectangleView, styles.getLayout]} />
      <Text style={[styles.setYourLocation, styles.helpUsIdentifyTypo]}>
        Set your location
      </Text>
      <View style={styles.searchPosition1}>
        <View style={[styles.searchItem, styles.searchPosition]} />
      </View>
      <TextInput
        style={[styles.search2, styles.searchPosition1]}
        textAlign="center"
        value={inputText}
        onChangeText={setInputText}
      />
      <Text style={[styles.helpUsIdentify, styles.helpUsIdentifyTypo]}>
        Help us identify the UV index
      </Text>
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
          source={require("../assets/icroundarrowback5.png")}
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
    position: "absolute",
  },
  getLayout: {
    height: 6,
    width: 90,
    borderRadius: Border.br_3xs,
    top: 66,
    position: "absolute",
  },
  helpUsIdentifyTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  searchPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  searchPosition1: {
    top: 556,
    height: 70,
    width: 430,
    left: 47,
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
    height: 70,
    width: 430,
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
  getStartedLocationChild: {
    left: 92,
    backgroundColor: Color.colorAliceblue,
  },
  getStartedLocationItem: {
    left: 197,
    backgroundColor: Color.colorLightslategray,
  },
  getStartedLocationInner: {
    left: 407,
    backgroundColor: Color.colorAliceblue,
  },
  rectangleView: {
    left: 302,
    backgroundColor: Color.colorAliceblue,
  },
  setYourLocation: {
    top: 432,
    left: 51,
    fontSize: FontSize.size_21xl,
    color: Color.colorDimgray,
    width: 422,
    height: 51,
  },
  searchItem: {
    backgroundColor: Color.colorAliceblue,
    height: 70,
    width: 430,
    position: "absolute",
  },
  search2: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  helpUsIdentify: {
    top: 493,
    left: 95,
    fontSize: FontSize.size_6xl,
    color: Color.colorLightsalmon,
  },
  searchInner: {
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  search3: {
    top: 41,
    left: 27,
  },
  icon: {
    height: "100%",
  },
  icroundArrowBack: {
    left: 32,
    top: 46,
    width: 40,
    height: 40,
    position: "absolute",
  },
  getStartedLocation: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    height: 1110,
  },
});

export default GetStartedLocation;
