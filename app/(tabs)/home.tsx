import { View, Text } from "react-native";
import React from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const Home = () => {
  const data = useContext(ThemeContext);
  console.log(data);
  return (
    <View
      className={`${data?.theme === "dark" ? "bg-black" : "bg-white"} flex-1`}
    >
      <Text>Home</Text>
    </View>
  );
};

export default Home;
