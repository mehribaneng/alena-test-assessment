import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { DATA } from "./src/mocks";
import ArrowButton from "./src/components/ArrowButton";
import Button from "./src/components/Button";
import List from "./src/components/List";
import Modal from "./src/components/Modal";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ImageBackground
      source={require("./assets/gradient-bg-main.jpeg")}
      resizeMode="cover"
      onLoadEnd={onLayoutRootView}
    >
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
    </ImageBackground>
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
