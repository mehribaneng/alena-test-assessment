import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

import BookIcon from "./icons/BookIcon";

type Props = {
  onPress: () => void;
};

const Button: React.FC<Props> = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <BookIcon />
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>What will I learn?</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 241,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#F4F2EF",
    borderRadius: 12,
    shadowColor: "rgba(69, 64, 63, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  labelWrapper: {
    marginLeft: 10,
    paddingLeft: 10,
    paddingVertical: 6,
    borderLeftWidth: 0.5,
    borderLeftColor: "#F4F2EF",
  },
  label: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 17,
    color: "#45403F",
  },
});

export default Button;
