import {
  View,
  Text,
  Platform,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/button";
const Index = () => {
  console.log(Platform.OS);
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
            placeholder="Email"
            keyboardType="phone-pad"
            style={{
              borderWidth: 1,
              borderColor: "red",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "red",
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          />
          <TouchableOpacity
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
              Click me
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
