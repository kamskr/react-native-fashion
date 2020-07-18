import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  constainer: {},
});

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
  return (
    <View style={{ width }}>
      <Text>{label}</Text>
    </View>
  );
};

export default Slide;
