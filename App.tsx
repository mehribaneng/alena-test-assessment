import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { DATA } from "./src/mocks";
import List from "./src/components/List";
import Button from "./src/components/Button";
import Modal from "./src/components/Modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
});
