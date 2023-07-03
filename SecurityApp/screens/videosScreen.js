import React, { useState, useEffect, useRef } from "react";
import { View, Button, SafeAreaView, Text, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useFocusEffect } from "@react-navigation/native";
import VideoComponent from "../components/videoComponent";

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
        200000
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
  //calcutale the date a month ago
  const date = new Date();
  date.setMonth(date.getMonth() - 1);

  return (
    <SafeAreaView className="flex-1">
      <View className="px-4 py-2">
        <Text className="text-lg font-bold text-center">
          Videos recorded since {date.toLocaleDateString()}
        </Text>
      </View>
      <VideoComponent />
    </SafeAreaView>
  );
}
