import { View, Text, Image } from "react-native";
import React from "react";

type CardProps = {
  image: string;
  title: string;
  desc: string;
};
const Card = ({ image, title, desc }: CardProps) => {
  return (
    <View>
      <Image source={{ uri: image }} />
    </View>
  );
};

export default Card;
