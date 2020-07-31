import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";

const assets = [...authenticationAssets];
const fonts = {
  "SFProText-Bold": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./src/assets/fonts/SF-Pro-Text-Regular.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
