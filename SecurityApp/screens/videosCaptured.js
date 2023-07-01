import React from "react";
import { Text, Linking, Button, View } from "react-native";

export default function Details({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-center text-blue-800 font-medium text-lg w-32 truncate">
        Here you can see the videos recorded by the camera.
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
      <Button title="🏠" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
}
