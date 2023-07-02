import React from "react";
import { Text, Linking, Button, View, Alert, Platform } from "react-native";
import { useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";

export default function Details({ navigation }) {
  let [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    async function authenticate() {
      const result = await LocalAuthentication.authenticateAsync();
      setIsAuthenticated(result.success);
    }
    authenticate();
  }, []);
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
      <Text className="text-center text-blue-800 font-medium text-lg w-32 truncate">
        {isAuthenticated ? "Authenticated" : "Not Authenticated"}
      </Text>
    </View>
  );
}
