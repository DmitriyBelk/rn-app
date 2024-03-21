import { Stack, SplashScreen } from "expo-router";
import React from "react";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform } from "react-native";

const RootLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          statusBarColor: Colors.black,
          contentStyle: {
            backgroundColor: Colors.black,
            paddingTop: Platform.OS !== "ios" ? insets.top : undefined,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="restore"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
