import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ReapplyEvery = () => {
  return (
    <Text style={styles.hour} nativeID="reapplyInterval">
      1 hour
    </Text>
  );
};

const styles = StyleSheet.create({
  hour: {
    position: "absolute",
    top: 100,
    left: 21,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorLightsalmon,
    textAlign: "left",
    width: 160,
    height: 35,
  },
});

export default ReapplyEvery;
