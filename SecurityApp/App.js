import { Linking, SafeAreaView, Text, View, Button } from "react-native";
import Navigator from "./routes/homeStack";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <Navigator />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}
