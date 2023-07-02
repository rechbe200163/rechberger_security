import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // To use icons


const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-center mb-5">
        My Security App
      </Text>

      <View className="flex-row justify-between mb-5">
        <View className="flex-1 items-center mx-2">
          <Ionicons name="shield-checkmark-outline" size={40} color="green" />
          <Text className="text-center">Security Status: Safe</Text>
        </View>

        <View className="flex-1 items-center mx-2">
          <Ionicons name="scan-outline" size={40} color="blue" />
          <TouchableOpacity
            className="bg-purple-700 text-white font-bold rounded-full py-2 px-4"
            onPress={() => console.log("Scan Initiated")}
          >
            <Text>Initiate Scan</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-between">
        <TouchableOpacity
          className="flex-1 items-center mx-2"
          onPress={() => navigation.navigate("Settings")}
        >
          <Ionicons name="settings-outline" size={40} color="black" />
          <Text className="text-center">Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 items-center mx-2"
          onPress={() => navigation.navigate("History")}
        >
          <Ionicons name="time-outline" size={40} color="black" />
          <Text className="text-center">History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
