import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import { Routes } from "./src/components/Navigation";
// import * as assets from "./src/assets";
//TODO import assets
// const assets = [...assets];
const fonts = {
  "SFProText-Bold": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./src/assets/fonts/SF-Pro-Text-Regular.otf"),
};
const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        {/* <LoadAssets {...{ fonts, assets }}> */}
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
