import { StatusBar } from "expo-status-bar";
import { Linking, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-800 font-medium text-lg truncate w-32">
        Open up App.js to start working on your app!{" "}
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
      <SafeAreaView />
    </View>
  );
}
