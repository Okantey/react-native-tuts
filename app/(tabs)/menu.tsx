import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Menu = () => {
  const data = useContext(ThemeContext);

  const handleDarkMode = () => {
    data?.setTheme("dark");
    console.log("This is the menu page", data);
  };

  const handleLightMode = () => {
    data?.setTheme("light");
    console.log("This is the menu page", data);
  };

  return (
    <SafeAreaView>
      <Text>Menu</Text>

      {data?.theme === "light" && (
        <TouchableOpacity
          onPress={() => handleDarkMode()}
          className="bg-black px-10 py-3"
        >
          <Text className="font-bold text-2xl text-white">Dark Mode</Text>
        </TouchableOpacity>
      )}

      {data?.theme === "dark" && (
        <TouchableOpacity
          onPress={() => handleLightMode()}
          className="bg-black px-10 py-3"
        >
          <Text className="font-bold text-2xl text-white">Light Mode</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Menu;
