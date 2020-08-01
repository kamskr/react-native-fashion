import React, { useState } from "react";
import { Box, Text } from "../../../components/Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <RectButton
      onPress={() => setChecked((checked) => !checked)}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
