import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/context/ThemeContext";

const InitialLayout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
};

export default InitialLayout;
