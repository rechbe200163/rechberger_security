import { View, Text, Linking } from "react-native";
import React from "react";

export default function Details() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-800 font-medium text-lg truncate w-32">
        Here you can see the videos recorded by the camera.{" "}
        <Text
          className="text-blue-600 underline text-xl"
          onPress={() => {
            Linking.openURL("https://aboutreact.com");
          }}
        >
          {" "}
          About React
        </Text>
      </Text>
    </View>
  );
}
