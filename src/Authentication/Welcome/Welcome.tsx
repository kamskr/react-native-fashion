import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import theme, { Box, Text } from "../../components/Theme";
import { Button } from "../../components";

const picture = require("../../assets/1.png");

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  picture: {
    alignSelf: "center",
    borderRadius: theme.borderRadius.xl,
    top: 100,
    width: width * 0.5,
    height: height * 0.5,
  },
});

const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius={theme.borderRadius.xl}
        backgroundColor="creamy"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image source={picture} style={styles.picture} />
      </Box>
      <Box flex={1} borderTopLeftRadius={theme.borderRadius.xl}>
        <Box
          backgroundColor="creamy"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius={theme.borderRadius.xl}
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button variant="primary" label="Have an account? Login" />
          <Button label="Join us, it's Free" />
          <Button variant="transparent" label="Join us, it's Free" />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
