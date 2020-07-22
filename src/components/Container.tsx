import React, { ReactNode } from "react";
import { View, Image, Dimensions, StyleSheet, StatusBar } from "react-native";

import theme, { Box } from "./Theme";

export const assets = [require("../assets/patterns/1.png")];
const { width } = Dimensions.get("window");
const aspectRation = 750 / 1125;
const height = width * aspectRation;

interface ContainerProps {
  children: ReactNode;
}

const Container = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <StatusBar barStyle="light-content" />
      <Box
        borderBottomLeftRadius={theme.borderRadius.xl}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={assets[0]}
          style={{
            width,
            height,
            borderBottomLeftRadius: theme.borderRadius.xl,
          }}
        />
      </Box>
      <Box flex={1}>
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius={theme.borderRadius.xl}
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        />
      </Box>
    </Box>
  );
};

export default Container;
