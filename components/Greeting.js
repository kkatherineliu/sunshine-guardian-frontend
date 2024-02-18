import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Greeting = () => {
  return (
    <Text style={styles.hiRachel} nativeID="userName">
      Hi Rachel,
    </Text>
  );
};

const styles = StyleSheet.create({
  hiRachel: {
    position: "absolute",
    top: 122,
    left: 42,
    fontSize: FontSize.size_16xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray,
    textAlign: "left",
    width: 422,
    height: 51,
  },
});

export default Greeting;
