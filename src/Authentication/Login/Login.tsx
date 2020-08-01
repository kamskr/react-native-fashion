import React from "react";
import { CheckBox } from "react-native";

import Container, { Button, Text } from "../../components";
import SocialLogin from "../components/SocialLogin";
import { Box } from "../../components/Theme";
import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";

const emailValidator = (email: string) => {
  // eslint-disable-next-line max-len
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const passwordValidator = (password: string) =>
  password.length > 6 ? false : true;

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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            validator={emailValidator}
          />
        </Box>

        <TextInput
          icon="lock"
          placeholder="Enter your Password"
          validator={passwordValidator}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Button variant="transparent" onPress={() => true}>
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => true}
            label="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
