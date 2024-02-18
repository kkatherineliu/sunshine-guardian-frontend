import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const UVIndex = () => {
  return (
    <Text style={styles.text} nativeID="uvIndex">
      7
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 29,
    left: 130,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorLightsalmon,
    textAlign: "center",
    width: 71,
    height: 53,
  },
});

export default UVIndex;
