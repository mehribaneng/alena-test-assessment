import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, Image, View, Pressable } from "react-native";

import BookIcon from "./icons/BookIcon";
import CloseIcon from "./icons/CloseIcon";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

const Modal: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <>
      <BlurView style={styles.background} />
      <Pressable
        onPressOut={(event) =>
          event.target == event.currentTarget && setIsOpen(false)
        }
        style={styles.modalContainer}
      >
        <View style={styles.modal}>
          <Pressable
            style={styles.closeBtn}
            onPressOut={() => setIsOpen(false)}
            hitSlop={{
              left: 5,
              right: 5,
              top: 5,
              bottom: 5,
            }}
          >
            <CloseIcon />
          </Pressable>

          <View style={styles.header}>
            <BookIcon fill="#E8E7E7" />
          </View>

          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/plants.jpg")}
              style={{ maxWidth: "100%", height: 365 }}
            />
          </View>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  modalContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingHorizontal: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    paddingTop: 23,
    paddingHorizontal: 21,
    paddingBottom: 31,
    width: "100%",
    backgroundColor: "white",
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
  closeBtn: {
    position: "absolute",
    top: 11.85,
    right: 11.85,
  },
  header: {
    alignItems: "center",
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E7E7",
  },
  imageWrapper: { marginTop: 12, borderRadius: 12, overflow: "hidden" },
});

export default Modal;
