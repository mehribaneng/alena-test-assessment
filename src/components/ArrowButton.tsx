import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

import ArrowIcon from "./icons/ArrowIcon";

type Props = {
  isDisabled?: boolean;
  rotateDeg?: number;
  onPress?: () => void;
};

const ArrowButton: React.FC<Props> = ({
  isDisabled = false,
  rotateDeg = 0,
  onPress,
}) => {
  const renderArrow = () => (
    <View
      style={{
        transform: [{ rotate: `${rotateDeg}deg` }],
      }}
    >
      <ArrowIcon fill={!isDisabled ? "white" : "#867D7B"} />
    </View>
  );

  const handleButtonPress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      style={!isDisabled ? styles.btnWrapper : null}
      onPress={handleButtonPress}
    >
      {renderArrow()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 8.5,
    backgroundColor: "#BE5339",
    borderRadius: 54,
  },
});

export default ArrowButton;
