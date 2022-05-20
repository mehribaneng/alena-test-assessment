import React from "react";
import { StyleSheet } from "react-native";

import Gradient from "./gradient-bg-main.svg";

const BackgroundGradient = () => {
  return (
    <Gradient
      height="100%"
      width="100%"
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    />
  );
};

export default BackgroundGradient;
