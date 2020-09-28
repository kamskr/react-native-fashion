import React from "react";
import { TouchableWithoutFeedback } from "react-native";

import { Box, Text } from "../../components";

import SocialLogin from "./SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" margin="m">
        <TouchableWithoutFeedback onPress={() => onPress}>
          <Text>
            <Text variant="button" color="white">
              {`${title} `}
            </Text>
            <Text color="primary">{action}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
