import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SPFRating = () => {
  return (
    <Text style={styles.text} nativeID="spf">
      30
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 24,
    left: 126,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorLightsalmon,
    textAlign: "center",
    width: 71,
    height: 53,
  },
});

export default SPFRating;
