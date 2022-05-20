import React from "react";
import { StyleSheet } from "react-native";
import { Svg, Defs, Rect, LinearGradient, Stop } from "react-native-svg";

const BackgroundGradient = () => {
  return (
    <Svg
      height="100%"
      width="100%"
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#F6E3C8" stopOpacity="1" />
          <Stop offset="70%" stopColor="#FDF4EB" stopOpacity="0" />
          <Stop offset="100%" stopColor="#F5F1E7" stopOpacity="0.5" />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
};

export default BackgroundGradient;
