import { Text, Button, SafeAreaView, View, Image } from "react-native";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-start pt-5">
        <Image
          className="w-40 h-40 rounded-full"
          source={require("../assets/cat-5183427_1920.jpg")}
        />
        <Text className="text-center text-blue-800 font-medium text-lg mt-5">
          This is a placeholder for profile text
        </Text>
      </View>
    </SafeAreaView>
  );
}
