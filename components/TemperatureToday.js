import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TemperatureToday = () => {
  return (
    <Text style={styles.c} nativeID="currentTemp">{`28°C
`}</Text>
  );
};

const styles = StyleSheet.create({
  c: {
    position: "absolute",
    top: 0,
    left: 66,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorLightsalmon,
    textAlign: "center",
    width: 100,
    height: 53,
  },
});

export default TemperatureToday;
