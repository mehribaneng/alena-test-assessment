import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { DATA } from "./src/mocks";
import List from "./src/components/List";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>To reach this goal, we will:</Text>
          <List data={DATA} />
        </View>
      </View>
    </SafeAreaView>
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
});
