import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="menu" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabLayout;
