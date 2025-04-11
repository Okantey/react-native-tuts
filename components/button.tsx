import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProperties = {
  title: string;
  bgColor: string;
  textColor: string;
  padding: number;
  margin: number;
  onPress: () => void;
};

const Button = ({
  title,
  bgColor,
  textColor,
  padding,
  margin,
  onPress,
}: ButtonProperties) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: bgColor, padding, margin }}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
