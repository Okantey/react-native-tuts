import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/context/ThemeContext";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [fontsLoading, setFontsLoading] = useState(false);

  const handleFontsImport = async () => {
    setFontsLoading(true);
    try {
      await Font.loadAsync({
        "leckerli-regular": require("@/assets/fonts/Leckerli_One/LeckerliOne-Regular.ttf"),
      });
      console.log("Fonts loaded");
      await SplashScreen.hideAsync();
    } catch (error) {
      console.log(error);
    } finally {
      setFontsLoading(false);
    }
  };
  useEffect(() => {
    handleFontsImport();
  }, []);

  // if (!fontsLoading) {
  //   return;
  // }

  return (
    <>
      {!fontsLoading && (
        <ThemeProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
          </Stack>
        </ThemeProvider>
      )}
    </>
  );
};

export default InitialLayout;
