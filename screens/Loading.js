import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useLocationContext } from '../context/LocationContext';
import { useSkinTypeContext } from '../context/SkinTypeContext';
import { useFitzContext } from '../context/FitzContext';
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Loading = () => {
  generateRecommendation()

  const generateRecommendation = () => {
    // for testing purposes only since other input pages are not functional
    const { setSharedSkinType } = useSkinTypeContext();
    setSharedSkinType("dry skin");
    const { setSharedLocation } = useLocationContext();
    setSharedLocation("Toronto, CA");
    const { setSharedFitz } = useFitzContext();
    setSharedFitz("Type 3");

    // extracting the stored values
    const { skin_type } = useSkinTypeContext(); // skin type
    const { location } = useLocationContext(); // location
    const { fitzpatrick } = useFitzContext(); // fitzpatrick skin type

    const payload = {
      skin_type,
      location,
      fitzpatrick,
    };

    fetch('http://127.0.0.1:5000/sunscreen', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  return (
    <View style={styles.loading}>
      <Text style={styles.findingYourMatch}>Finding your match...</Text>
      <Image
        style={styles.untitledArtwork21}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Text style={styles.findingYourMatch}>Finding your match...</Text>
      <Image
        style={styles.untitledArtwork21}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  findingYourMatch: {
    top: 347,
    left: 65,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorLightsalmon,
    textAlign: "center",
    width: 393,
    height: 48,
    position: "absolute",
  },
  untitledArtwork21: {
    top: 406,
    left: 111,
    width: 302,
    height: 358,
    position: "absolute",
  },
  loading: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 1110,
    overflow: "hidden",
  },
});

export default Loading;
