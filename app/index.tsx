import {
  View,
  Text,
  Platform,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  // this function handles the login
  const handleLogin = () => {
    if (email === "okantey@gmail.com" && password === "123456") {
      router.push("/todolist");
    } else {
      Alert.alert("An error occurred", "Invalid email or password", [
        {
          text: "Retry",
          onPress: () => handleLogin(),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
      ]);
    }
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 20 }}
    >
      <ScrollView>
        <Text style={{ fontSize: 30, fontWeight: "800", marginBottom: 40 }}>
          Login
        </Text>
        <View style={{ gap: 30 }}>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            keyboardType="phone-pad"
            style={{
              borderWidth: 1,
              borderColor: "gray",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder="Password"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Feather
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </View>
          <TouchableOpacity
            onPress={() => handleLogin()}
            style={{ backgroundColor: "black", padding: 20, borderRadius: 20 }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
