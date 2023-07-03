import React, { useState, useEffect, useRef } from "react";
import { View, Button, SafeAreaView, Text, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useFocusEffect } from "@react-navigation/native";

export default function Videos() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const lockTimeoutRef = useRef(null);

  const onFaceId = async () => {
    try {
      const isCompatible = await LocalAuthentication.hasHardwareAsync();
      if (!isCompatible) {
        throw new Error("Your device isn't compatible.");
      }
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        throw new Error("No Faces / Fingers found.");
      }
      const authResult = await LocalAuthentication.authenticateAsync();
      if (authResult.success) {
        setIsAuthenticated(true);
        // Set a timeout to automatically log out the user after 20 seconds of inactivity
        lockTimeoutRef.current = setTimeout(
          () => setIsAuthenticated(false),
          20000
        );
      }
    } catch (error) {
      Alert.alert("An error has occurred", error?.message);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      onFaceId();
      return () => {
        setIsAuthenticated(false);
        // Clear the timeout when the screen is unfocused
        if (lockTimeoutRef.current) {
          clearTimeout(lockTimeoutRef.current);
        }
      };
    }, [])
  );

  useEffect(() => {
    // Clear and reset the timeout every time isAuthenticated changes
    if (isAuthenticated && lockTimeoutRef.current) {
      clearTimeout(lockTimeoutRef.current);
      lockTimeoutRef.current = setTimeout(
        () => setIsAuthenticated(false),
        20000
      );
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-center text-blue-800 font-medium text-lg w-32 truncate">
          Please authenticate to see videos.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
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
      </View>
    </SafeAreaView>
  );
}
