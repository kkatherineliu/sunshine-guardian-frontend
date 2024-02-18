import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ReapplyTime = () => {
  return <Text style={styles.text}>45</Text>;
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 185,
    left: 5,
    fontSize: FontSize.size_41xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray,
    textAlign: "center",
    width: 422,
    height: 51,
  },
});

export default ReapplyTime;
