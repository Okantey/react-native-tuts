import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProps = {
  text: string;
  width: number;
  backgroundColor: string;
  color: string;
  padding: number;
};

const Button = ({
  color,
  backgroundColor,
  width,
  padding,
  text,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={{ backgroundColor, width, padding }}>
      <Text style={{ color }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
