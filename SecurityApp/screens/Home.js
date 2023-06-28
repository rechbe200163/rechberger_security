import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Details");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-800 font-medium text-lg truncate w-32">
        Home screen
      </Text>
      <Button title="Go to Details" onPress={pressHandler} />
      <SafeAreaView />
    </View>
  );
}
