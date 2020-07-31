import React from "react";
import { View } from "react-native";

import Container, { Button, Text } from "../../components";
import SocialLogin from "../components/SocialLogin";
import { Box } from "../../components/Theme";

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert("SignUp!")}>
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an acount?
            </Text>
            <Text variant="button" color="primary">
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
