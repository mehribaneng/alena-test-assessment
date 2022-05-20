import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { DATA } from "./src/mocks";
import ArrowButton from "./src/components/ArrowButton";
import BackgroundGradient from "./src/components/BackgroundGradient";
import Button from "./src/components/Button";
import List from "./src/components/List";
import Modal from "./src/components/Modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BackgroundGradient />

      <SafeAreaView>
        <StatusBar style="auto" />

        <View style={styles.container}>
          <View>
            <Text style={styles.title}>To reach this goal, we will:</Text>
            <List data={DATA} />
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setIsOpen(true)} />
            </View>
          </View>

          <View style={styles.footer}>
            <ArrowButton isDisabled />
            <ArrowButton rotateDeg={180} />
          </View>
        </View>
      </SafeAreaView>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    paddingTop: 73,
    paddingHorizontal: 21,
    paddingBottom: 18,
  },
  title: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 34,
    color: "#1D1917",
  },
  buttonWrapper: {
    marginTop: 46,
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
