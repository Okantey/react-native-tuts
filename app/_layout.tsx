import { Stack } from "expo-router";

const InitialLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
    </Stack>
  );
};

export default InitialLayout;
