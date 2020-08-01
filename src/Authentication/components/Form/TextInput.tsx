import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../../../components/Theme";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadius.m * 2;

const Valid = true;
const Invalid = false;
const Pristine = null; //default
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(null);

  const reColor: keyof typeof theme.colors = (() => {
    switch (state) {
      case Pristine:
        return "darkGrey";
      case Valid:
        return "primary";
      case Invalid:
        return "danger";
      default:
        return "darkGrey";
    }
  })();

  const color = theme.colors[reColor];
  const onChangeText = (text: string) => {
    setInput(text);
    validate();
  };
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      padding="s"
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>

      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? "primary" : "danger"}
          borderRadius={theme.borderRadius.m}
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
