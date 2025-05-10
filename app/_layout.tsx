import { Stack } from "expo-router";
import "../global.css";

const InitialLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="todolist" />
    </Stack>
  );
};

export default InitialLayout;
